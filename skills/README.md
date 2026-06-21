# Skills — התקנה לכל סוכן קוד

פורמט [agentskills.io](https://agentskills.io) — עובד ב-Cursor, Claude Code, Codex, Copilot, Gemini.

## מה יש כאן

| Skill | מתי |
|-------|-----|
| `setup-summer-school` | שיבוט ראשון — מתקין הכול |
| `kid-brainstorm` | אין רעיון עדיין — **בלי קוד** |
| `kid-prompt-coach` | בונים מפרט קצר (PRD לילדים) |
| `kid-build-workflow` | איזה שלב בתהליך? |
| `ai-build-buddy` | בונים את game.html |

## הדרך הקלה

שבטו את המאגר → פתחו **שורש המאגר** בסוכן → כתבו:

```
קרא AGENTS.md והפעל setup-summer-school
```

## נתיבים לפי כלי

| כלי | תיקייה בפרויקט |
|-----|----------------|
| Cursor | `.cursor/skills/` |
| Claude Code | `.claude/skills/` |
| Codex / Copilot / Gemini | `.agents/skills/` |

ב-`starter-kit/my-first-game` כבר מותקן בשלושת הנתיבים.

## התקנה ידנית

```bash
# מתוך שורש המאגר
KIT=starter-kit/my-first-game
for agent in .cursor .claude .agents; do
  mkdir -p "$KIT/$agent/skills"
  cp -r skills/* "$KIT/$agent/skills/"
done
```

## שימוש

- אוטומטי — לפי `description` ב-SKILL.md
- ידני — `/skill-name` (Cursor, Claude) · `$skill-name` (Codex)

## תהליך מלא

רעיון → תכנון → מפרט → צעדים → בנייה → בדיקה → שיפור

ראו `reference/the-full-journey.html`
