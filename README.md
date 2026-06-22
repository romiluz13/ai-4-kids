# בונה עם AI - ערכת התחלה לילדים

עברית. גילאי 11-13. בלי ניסיון בתכנות.

אתר חי: [ai-4-kids.rom-88f.workers.dev](https://ai-4-kids.rom-88f.workers.dev)

## מה זה

מאגר שמכין סוכן קוד להיות מנטור לילד.

המנטור לא רק כותב קוד. הוא שואל, מסביר, נותן רמזים, בונה שינוי אחד בכל פעם, ומבקש מהילד לבדוק בדפדפן.

המטרה: ילד שמתחיל מאפס ומתקדם עד שהוא בונה משחקים ואפליקציות בעצמו.

## התחלה מהירה

1. הורידו את המאגר מ-GitHub.
2. פתחו אותו בסוכן קוד.
3. כתבו לסוכן:

```text
קרא את AGENTS.md והפעל setup-mentor.
דבר איתי בעברית פשוטה כמו מנטור לילד בלי ניסיון.
מה כדאי שאבנה היום: משחק או אפליקציה?
```

אם הסוכן לא מזהה Skills עדיין, הוא יכול להריץ:

```bash
bash scripts/install-mentor-skills.sh
```

בכיתה לא חייבים להתקין כלום. המורה יכול להציג את המצגת ולבנות חי על המסך.

## חומרי שיעור

| למי | קישור |
|-----|-------|
| מורה בכיתה | [מצגת לכיתה](https://ai-4-kids.rom-88f.workers.dev/presentation/class-presentation.html) |
| תלמידים בכיתה | [דף עבודה](https://ai-4-kids.rom-88f.workers.dev/presentation/class-handout.html) |
| המשך בבית | [כרטיס המשך](https://ai-4-kids.rom-88f.workers.dev/reference/survival-card.html) |

## איך לומדים

התהליך חוזר בכל פרויקט:

**רעיון → תכנון → מפרט → צעדים → בנייה → בדיקה → שיפור**

המנטור מתחיל קרוב לילד, ואז נותן יותר עצמאות:

1. מגלה: המנטור בונה ומסביר.
2. בונה: הילד כותב מפרט קצר.
3. חוקר: הילד מתקן עם רמזים.
4. ארכיטקט: הילד מתכנן פיצ'רים.
5. גיבור: הילד בונה לבד ומבקש עזרה כשצריך.

## מה יש במאגר

```text
ai-4-kids/
├── AGENTS.md
├── scripts/install-mentor-skills.sh
├── skills/
├── starter-kit/my-first-game/
│   ├── game.html
│   ├── templates/SPEC.md
│   ├── templates/TASKS.md
│   ├── .cursor/skills/
│   ├── .claude/skills/
│   └── .agents/skills/
├── presentation/
├── reference/
└── lessons/
```

## Skills

| Skill | תפקיד |
|-------|--------|
| `setup-mentor` | מתקין את המנטור |
| `kid-brainstorm` | רעיונות בלי קוד |
| `kid-prompt-coach` | מפרט קצר |
| `kid-build-workflow` | 7 שלבי הבנייה |
| `find-help` | תיעוד, רשת וקוד פתוח |
| `ai-build-buddy` | מנטור בזמן בנייה |

## תמיכת כלים

המאגר משתמש בפורמט `SKILL.md`.

נבדק מול התיעוד העדכני: Cursor, Claude Code, Codex ו-Gemini CLI תומכים ב-Agent Skills במיקומים דומים. GitHub Copilot קורא `AGENTS.md`; תמיכת Skills תלויה במשטח שבו משתמשים.

הכי פשוט: להריץ `bash scripts/install-mentor-skills.sh`, ואז לפתוח את `starter-kit/my-first-game`. הוא כבר כולל Skills בשלושה נתיבים נפוצים.

## קישורים חשובים

- [המסע המלא](https://ai-4-kids.rom-88f.workers.dev/reference/the-full-journey.html)
- [5 רמות המנטור](https://ai-4-kids.rom-88f.workers.dev/reference/mentor-levels.html)
- [איך כותבים מפרט](https://ai-4-kids.rom-88f.workers.dev/reference/how-to-prompt.html)
- [בחרו סוכן](https://ai-4-kids.rom-88f.workers.dev/reference/choose-your-agent.html)

## רישיון

חומרי לימוד לשימוש חופשי בלמידה. אם משתפים, צרפו קישור למאגר.
