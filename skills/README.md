# Skills - המנטור, לכל סוכן קוד

פורמט `SKILL.md`. עובד הכי טוב בסוכנים שתומכים ב-Agent Skills.

Cursor, Claude Code, Codex ו-Gemini CLI תומכים בזה. Copilot קורא `AGENTS.md`; תמיכת Skills תלויה במשטח.

## מה יש כאן

| Skill | מתי |
|-------|-----|
| `setup-mentor` | שיבוט ראשון - מתקין הכול |
| `kid-brainstorm` | אין רעיון עדיין - **בלי קוד** |
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
| Cursor | `.cursor/skills/` או `.agents/skills/` |
| Claude Code | `.claude/skills/` |
| Codex | `.agents/skills/` בפרויקט או `~/.codex/skills/` |
| Gemini CLI | `.agents/skills/` או `.gemini/skills/` |
| Copilot | `AGENTS.md` בתור הוראות קבועות |

ב-`starter-kit/my-first-game` כבר מותקן בשלושת הנתיבים המרכזיים.

## התקנה ידנית

```bash
KIT=starter-kit/my-first-game
for agent in .cursor .claude .agents; do
  mkdir -p "$KIT/$agent/skills"
  cp -r skills/*/ "$KIT/$agent/skills/"
done
```

## שימוש

- אוטומטי לפי `description` ב-SKILL.md
- ידני לפי הכלי: למשל `/skill-name` או `$skill-name`

## המנגנון

`ai-build-buddy` מעלה את הילד דרך 5 רמות עד שהוא בונה לבד.
ראו [מאפס לגיבור](https://ai-4-kids.rom-88f.workers.dev/reference/mentor-levels.html).
