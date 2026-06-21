---
name: setup-summer-school
description: >-
  השתמש כשהמשתמש שיבט את מאגר summer-school-ai-for-kids ורוצה להתקין skills,
  לפתוח את ערכת my-first-game, או שואל איך מתחילים עם Cursor / Claude Code /
  Codex / Copilot אחרי שיעור הקיץ.
compatibility: Cursor, Claude Code, Codex CLI, GitHub Copilot, Gemini CLI
---

# Setup Summer School

מתקין את המאגר לעבודה בבית. עברית פשוטה. צעד אחר צעד.

## שלב 0 — איזה סוכן?

שאל איזה כלי מותקן. לפי התשובה — נתיב skills:

| כלי | העתק `skills/*` ל… |
|-----|-------------------|
| Cursor | `starter-kit/my-first-game/.cursor/skills/` |
| Claude Code | `starter-kit/my-first-game/.claude/skills/` |
| Codex / Copilot / Gemini | `starter-kit/my-first-game/.agents/skills/` |

**מומלץ:** העתק לכל שלושת הנתיבים אם לא בטוחים — אותם קבצים, פורמט זהה.

```bash
REPO_ROOT="$(pwd)"
KIT="$REPO_ROOT/starter-kit/my-first-game"
mkdir -p "$KIT/.cursor/skills" "$KIT/.claude/skills" "$KIT/.agents/skills"
cp -r "$REPO_ROOT/skills/"*/ "$KIT/.cursor/skills/" 2>/dev/null || true
for s in "$REPO_ROOT/skills/"*/; do
  name=$(basename "$s")
  cp -r "$s" "$KIT/.claude/skills/$name"
  cp -r "$s" "$KIT/.agents/skills/$name"
done
```

## שלב 1 — פתח פרויקט

**Open Folder** על `starter-kit/my-first-game` — לא קובץ בודד.

## שלב 2 — קרא הוראות

קרא `AGENTS.md` בשורש המאגר ו-`starter-kit/my-first-game/AGENTS.md`.

## שלב 3 — בדיקה

1. `game.html` נפתח בדפדפן
2. Skills מופיעים (Cursor: Settings → Rules; Claude: `/skills`)
3. הסבר לילד את 7 השלבים: רעיון → תכנון → מפרט → צעדים → בנייה → בדיקה → שיפור

## שלב 4 — התחלה

הפעל `kid-brainstorm` — "מה היית רוצה ליצור היום?" **בלי קוד עדיין.**

## הפניות

- `reference/the-full-journey.html`
- `reference/choose-your-agent.html`
- `README.md`
