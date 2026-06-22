#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SKILLS_DIR="$ROOT/skills"
STARTER="$ROOT/starter-kit/my-first-game"
INSTALL_GLOBAL=1

if [[ "${1:-}" == "--project-only" ]]; then
  INSTALL_GLOBAL=0
elif [[ "${1:-}" != "" ]]; then
  echo "Usage: bash scripts/install-mentor-skills.sh [--project-only]" >&2
  exit 2
fi

if [[ ! -d "$SKILLS_DIR" ]]; then
  echo "Missing skills directory: $SKILLS_DIR" >&2
  exit 1
fi

SKILLS=()
while IFS= read -r skill; do
  SKILLS+=("$skill")
done < <(find "$SKILLS_DIR" -mindepth 1 -maxdepth 1 -type d -exec test -f "{}/SKILL.md" \; -print | sort)

if [[ "${#SKILLS[@]}" -eq 0 ]]; then
  echo "No skills found under $SKILLS_DIR" >&2
  exit 1
fi

sync_skills() {
  local target="$1"
  mkdir -p "$target"

  for skill in "${SKILLS[@]}"; do
    local name
    name="$(basename "$skill")"
    mkdir -p "$target/$name"
    rsync -a --delete "$skill/" "$target/$name/"
  done
}

verify_target() {
  local target="$1"
  local missing=0

  for skill in "${SKILLS[@]}"; do
    local name
    name="$(basename "$skill")"
    if [[ ! -f "$target/$name/SKILL.md" ]]; then
      echo "Missing: $target/$name/SKILL.md" >&2
      missing=1
    fi
  done

  return "$missing"
}

echo "Installing ai-4-kids mentor skills"
echo "Source: $SKILLS_DIR"
echo

PROJECT_TARGETS=(
  "$STARTER/.cursor/skills"
  "$STARTER/.claude/skills"
  "$STARTER/.agents/skills"
)

GLOBAL_TARGETS=(
  "$HOME/.agents/skills"
  "$HOME/.cursor/skills"
  "$HOME/.claude/skills"
  "$HOME/.codex/skills"
  "$HOME/.gemini/skills"
)

echo "Syncing starter project skills..."
for target in "${PROJECT_TARGETS[@]}"; do
  sync_skills "$target"
  verify_target "$target"
  echo "OK $target"
done

if [[ "$INSTALL_GLOBAL" -eq 1 ]]; then
  echo
  echo "Syncing global skills..."
  for target in "${GLOBAL_TARGETS[@]}"; do
    sync_skills "$target"
    verify_target "$target"
    echo "OK $target"
  done
else
  echo
  echo "Skipped global install (--project-only)."
fi

echo
echo "Done."
echo "Next: open $STARTER in your coding agent and start with kid-brainstorm."
