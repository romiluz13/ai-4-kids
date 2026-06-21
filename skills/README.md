# Skills — המנטור, לכל סוכן קוד

פורמט [agentskills.io](https://agentskills.io) — עובד ב-Cursor, Claude Code, Codex, Copilot, Gemini.

## מה יש כאן

| Skill | מתי |
|-------|-----|
| `setup-mentor` | שיבוט ראשון — מתקין הכול |
| `kid-brainstorm` | אין רעיון עדיין — **בלי קוד** |
| `kid-prompt-coach` | בונים מפרט קצר |
| `kid-build-workflow` | איזה שלב בתהליך? |
| `find-help` | מחקר, תיעוד וקוד פתוח כשצריך עזרה |
| `ai-build-buddy` | מנטור מדורג (רמה 1→5) בזמן בנייה |

## הדרך הקלה

הורידו/שבטו את המאגר → פתחו בסוכן → כתבו:

```
קרא AGENTS.md והפעל setup-mentor
```

## נתיבים לפי כלי

| כלי | תיקייה |
|-----|--------|
| Cursor | `.cursor/skills/` |
| Claude Code | `.claude/skills/` |
| Codex / Copilot / Gemini | `.agents/skills/` |

ב-`starter-kit/my-first-game` כבר מותקן בשלושת הנתיבים.

## התקנה ידנית

```bash
KIT=starter-kit/my-first-game
for agent in .cursor .claude .agents; do
  mkdir -p "$KIT/$agent/skills"
  cp -r skills/*/ "$KIT/$agent/skills/"
done
```

## שימוש

- אוטומטי — לפי `description` ב-SKILL.md
- ידני — `/skill-name` (Cursor, Claude) · `$skill-name` (Codex)

## המנגנון — מאפס לגיבור

`ai-build-buddy` מעלה את הילד דרך 5 רמות עד שהוא בונה לבד.
ראו `reference/mentor-levels.html`.
