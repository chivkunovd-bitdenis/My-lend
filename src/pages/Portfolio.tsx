import React from "react";

type IconProps = {
  className?: string;
  title?: string;
};

function IconBase({ className, title, children }: React.PropsWithChildren<IconProps>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      className={className}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

function IconDatabase(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 7c0 1.66 3.58 3 8 3s8-1.34 8-3-3.58-3-8-3-8 1.34-8 3Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7v10c0 1.66 3.58 3 8 3s8-1.34 8-3V7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="currentColor" strokeWidth="1.8" />
    </IconBase>
  );
}

function IconBrain(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M9.5 4.5c-1.66 0-3 1.34-3 3v.5a2.5 2.5 0 0 0 0 5v.5c0 1.66 1.34 3 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14.5 4.5c1.66 0 3 1.34 3 3v.5a2.5 2.5 0 0 1 0 5v.5c0 1.66-1.34 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9.5 9h5M9.5 12h5M9.5 15h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </IconBase>
  );
}

function IconBriefcase(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M9 7V6.5A2.5 2.5 0 0 1 11.5 4h1A2.5 2.5 0 0 1 15 6.5V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4.5 8.5h15v9a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 4.5 17.5v-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4.5 12.2c2.7 1.8 5.2 2.7 7.5 2.7s4.8-.9 7.5-2.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </IconBase>
  );
}

function IconArrowRight(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  );
}

function IconWorkflow(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 7h4v4H7V7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M13 13h4v4h-4v-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M11 9h3.2a2.8 2.8 0 0 1 2.8 2.8V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </IconBase>
  );
}

function IconFileText(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 4h7l3 3v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 12h8M8 16h8M8 8h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </IconBase>
  );
}

function IconLayers(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3 3.5 7.5 12 12l8.5-4.5L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M3.5 12.2 12 16.7l8.5-4.5M3.5 16.9 12 21.4l8.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  );
}

function IconWrench(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M21 7.5a5.5 5.5 0 0 1-7.2 5.2L7.1 19.4a2 2 0 0 1-2.8 0l-.7-.7a2 2 0 0 1 0-2.8l6.7-6.7A5.5 5.5 0 0 1 16.5 3l-2.4 2.4 1.5 1.5L18 4.5A5.5 5.5 0 0 1 21 7.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </IconBase>
  );
}

function IconChart(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 19V5M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 15l3-3 3 2 4-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  );
}

function IconPackageCheck(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3 4.5 7.2V16.8L12 21l7.5-4.2V7.2L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8.2 12.2 11 15l4.8-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  );
}

function IconSparkles(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3l1.2 3.6L17 8l-3.8 1.4L12 13l-1.2-3.6L7 8l3.8-1.4L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M5 13l.8 2.4L8 16l-2.2.6L5 19l-.8-2.4L2 16l2.2-.6L5 13ZM19 13l.8 2.4L22 16l-2.2.6L19 19l-.8-2.4L16 16l2.2-.6L19 13Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </IconBase>
  );
}

function IconPhone(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 4h10v16H7V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M10 17h4M10 7h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </IconBase>
  );
}

function IconHeadphones(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 13v-1a7 7 0 0 1 14 0v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5 13h2.5v5H6.5A1.5 1.5 0 0 1 5 16.5V13ZM19 13h-2.5v5h1A1.5 1.5 0 0 0 19 16.5V13Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M16.5 18.5c-.7 1.1-1.9 1.7-3.5 1.7h-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </IconBase>
  );
}

function IconMessageCheck(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 5.5h14v9.5a2 2 0 0 1-2 2H9l-4 3v-12.5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 11.5l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  );
}

function IconVideoText(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4.5 6.5h10v8h-10v-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14.5 9.2 19.5 7v7l-5-2.2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M5 19h9M17 19h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </IconBase>
  );
}

function Card({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={["rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06),_0_12px_28px_rgba(15,23,42,0.08)]", className].join(" ")}>
      {children}
    </div>
  );
}

function CardContent({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={className}>{children}</div>;
}

function Pill({ children }: React.PropsWithChildren) {
  return <span className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm text-[#475569] shadow-[0_1px_2px_rgba(15,23,42,0.06)]">{children}</span>;
}

function SoftGridPattern({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={["pointer-events-none absolute inset-0 opacity-[0.45]", className].join(" ")}
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)",
        backgroundSize: "42px 42px",
        maskImage: "radial-gradient(circle at center, black 0%, transparent 68%)",
      }}
    />
  );
}

function SectionTitle({ eyebrow, title, text, tone = "light" }: { eyebrow?: string; title: string; text?: string; tone?: "light" | "dark" }) {
  const isDark = tone === "dark";
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? <div className={["text-sm font-medium uppercase tracking-[0.24em]", isDark ? "text-white/45" : "text-[#64748B]"].join(" ")}>{eyebrow}</div> : null}
      <h2 className={["mt-4 text-3xl font-semibold tracking-tight md:text-5xl", isDark ? "text-white" : "text-[#0F172A]"].join(" ")}>{title}</h2>
      {text ? <p className={["mt-5 text-lg leading-8", isDark ? "text-white/65" : "text-[#475569]"].join(" ")}>{text}</p> : null}
    </div>
  );
}

function HeroDashboardGraphic() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute right-6 top-12 hidden w-[390px] xl:block 2xl:w-[500px]">
      <div className="relative rounded-[2.5rem] border border-white/70 bg-white/65 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur">
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#C8A96A]/20 blur-2xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white p-5">
          <div className="mb-5 flex items-center justify-between">
            <div><div className="h-2.5 w-24 rounded-full bg-[#0F172A]" /><div className="mt-2 h-2 w-36 rounded-full bg-[#CBD5E1]" /></div>
            <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#C8A96A]" /><span className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" /><span className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" /></div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[74, 48, 91].map((height, index) => (
              <div key={height} className="rounded-3xl bg-[#F1F5F9] p-3">
                <div className="mb-8 h-2 w-12 rounded-full bg-[#CBD5E1]" />
                <div className="flex h-24 items-end gap-1.5">
                  <span className="w-full rounded-full bg-[#0F172A]" style={{ height: `${height}%` }} />
                  <span className="w-full rounded-full bg-[#C8A96A]/80" style={{ height: `${Math.max(32, height - 18 + index * 6)}%` }} />
                  <span className="w-full rounded-full bg-[#CBD5E1]" style={{ height: `${Math.max(26, height - 28)}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-3xl border border-[#E2E8F0] bg-white p-4">
            <div className="mb-3 flex items-center justify-between"><div className="h-2.5 w-28 rounded-full bg-[#0F172A]" /><div className="h-2 w-12 rounded-full bg-[#C8A96A]" /></div>
            {[88, 64, 76].map((width) => <div key={width} className="mt-2.5 h-2 rounded-full bg-[#F1F5F9]"><div className="h-2 rounded-full bg-[#94A3B8]" style={{ width: `${width}%` }} /></div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

const focusCards = [
  { icon: IconDatabase, title: "Фокус", text: "процессы, деньги, данные, контроль" },
  { icon: IconBrain, title: "AI", text: "не ради моды, а как эффективный слой внутри регулярных задач" },
  { icon: IconBriefcase, title: "Подход", text: "от неясной боли до рабочего контура" },
];

const approach = [
  { icon: IconWorkflow, title: "Разбираю процесс.", text: "Смотрю, как задача работает сейчас: где данные, что люди делают руками, где возникают ошибки и теряется контроль." },
  { icon: IconFileText, title: "Описываю логику.", text: "Перевожу устные договорённости и хаос в таблицах в систему: роли, сценарии, правила расчётов и контрольные точки." },
  { icon: IconLayers, title: "Проектирую решение.", text: "Продумываю структуру данных и интеграции так, чтобы инструмент решал задачу бизнеса, а не просто «существовал»." },
  { icon: IconWrench, title: "Собираю инструмент.", text: "Делаю первый рабочий контур (интерфейс, дашборд, бот или сервис) и проверяю его на реальных сценариях." },
];

const transformations = [
  "Хаотичные Excel-таблицы → управленческий дашборд.",
  "Ручные отчёты → автоматическая загрузка и расчёт.",
  "Сырые данные маркетплейсов → реальная прибыль и рентабельность по артикулам.",
  "Складской хаос → прозрачные статусы, движения и остатки.",
  "Длинные встречи → зафиксированные решения и задачи.",
  "Разрозненные данные → понятная структура полей и логика связей.",
];

const situations = [
  "Прибыль считается «примерно», а решения принимаются по обороту.",
  "Данные живут в разных кабинетах, чатах и личных таблицах сотрудников.",
  "Сотрудники регулярно делают руками однотипные операции.",
  "Склад и остатки держатся только на памяти отдельных людей.",
  "Собственник не видит общую управленческую картину в «одном окне».",
  "Разработка кажется слишком дорогой, долгой и технически непонятной.",
];

const projects = [
  {
    title: "Финансовая оцифровка для WB-селлеров",
    status: "Рабочий продукт, есть реальные пользователи.",
    icon: IconChart,
    problem: "Селлер видит заказы, продажи и оборот, но не всегда понимает, сколько реально зарабатывает после себестоимости, комиссий, логистики, хранения, рекламы и операционных расходов.",
    solution: (
      <>
        Система получает данные кабинета по API Wildberries и собирает слой управленческой логики поверх сырых отчётов. Продукт доступен по ссылке:{" "}
        <a className="font-semibold text-[#0F172A] underline decoration-[#C8A96A] underline-offset-4 transition hover:text-[#C8A96A]" href="https://sellerfocus.pro" target="_blank" rel="noreferrer">
          sellerfocus.pro
        </a>
        .
      </>
    ),
    effect: "Собственник видит не грязный оборот, а управленческую финансовую картину: какие товары кормят бизнес, а какие съедают деньги.",
  },
  {
    title: "WMS для фулфилментов и складских операций",
    status: "MVP, готовится к тестированию на реальных сценариях.",
    icon: IconPackageCheck,
    problem: "При ручном складском учёте бизнес зависит от памяти сотрудников, сталкивается с ошибками в приёмке, сборке и остатках.",
    solution: "MVP покрывает заявки селлеров, карточки товаров, приёмку, заказы, остатки, адресное хранение, статусы операций и логику работы со штрихкодами.",
    effect: "Цель — сделать склад управляемым: видеть остатки и движение товара, снизить риск ошибок и зависимость от людей.",
  },
  {
    title: "Саммари встреч",
    status: "Сохраняется без изменений",
    icon: IconHeadphones,
    problem: "После встреч договорённости, решения и задачи часто остаются в голове участников или фиксируются вручную и нерегулярно.",
    solution: "Инструмент записывает аудио и автоматически превращает его в текст, структурирует и саммаризирует, сохраняет готовый результат в рабочую папку.",
    effect: "Встречи превращаются в структурированные итоги: решения, задачи, договорённости и ключевые тезисы фиксируются автоматически.",
  },
  {
    title: "Автопостинг в Pinterest",
    status: "Сохраняется без изменений",
    icon: IconSparkles,
    problem: "Контент-маркетинг часто упирается не в идеи, а в ручную рутину: подготовить, загрузить, оформить и опубликовать десятки единиц контента.",
    solution: "Решение автоматизирует массовую публикацию контента и помогает тестировать гипотезы органического трафика с меньшей ручной нагрузкой.",
    effect: "Бизнес получает возможность чаще публиковать контент и дешевле проверять каналы продвижения без пропорционального роста ручной работы.",
  },
  {
    title: "AI-бот для отзывов",
    status: "Сохраняется без изменений",
    icon: IconMessageCheck,
    problem: "Отзывы важны для доверия к карточке, но регулярная обработка отнимает время и часто делается нерегулярно.",
    solution: "Бот генерирует ответы на отзывы покупателей с учётом контекста, особенностей товара и желаемого тона коммуникации бренда.",
    effect: "Снижается ручная нагрузка, коммуникация с покупателями становится регулярнее, а тон бренда — более единым.",
  },
  {
    title: "Саммаризация видео",
    status: "Сохраняется без изменений",
    icon: IconVideoText,
    problem: "Длинные обучающие и экспертные видео сложно быстро перерабатывать в прикладные заметки и выводы.",
    solution: "Бот извлекает суть из длинного контента: транскрибирует, структурирует, делает краткое саммари и выделяет ключевые тезисы.",
    effect: "Помогает быстрее превращать длинные материалы в понятный текстовый конспект для дальнейшей работы.",
  },
];

const aiCases = [
  { icon: IconPhone, title: "Контроль качества и анализ звонков", text: "Представьте, что вы больше не слушаете звонки менеджеров выборочно. Нейросеть прослушивает 100% диалогов и мгновенно присылает вам уведомление, если менеджер нарушил скрипт, проявил негатив или забыл предложить допродажу." },
  { icon: IconChart, title: "Управленческие сводки «в одно окно»", text: "Каждое утро вам в Telegram приходит не таблица, а текстовый отчет на человеческом языке: «Вчера прибыль выросла на 10%, основной драйвер — товар Х. Рекомендую увеличить бюджет на его рекламу, так как остатки позволяют»." },
  { icon: IconBriefcase, title: "HR и скрининг кандидатов", text: "Система сама забирает отклики с площадок, анализирует текст резюме, оценивает % совпадения с требованиями, задает уточняющие вопросы в Telegram и выдает вам выжимку только по самым релевантным людям." },
  { icon: IconDatabase, title: "Обработка лидов и CRM", text: "Клиент пишет сложный запрос на почту. Алгоритм понимает суть, заводит карточку лида в CRM, заполняет поля и сохраняет в черновиках готовый персонализированный ответ. Менеджеру остаётся только нажать «Отправить»." },
  { icon: IconFileText, title: "Документооборот и учет", text: "Инструмент читает сканы PDF-счетов, понимает их контекст, извлекает цифры, ИНН и номенклатуру, а затем мгновенно формирует готовые драфты для проведения в вашей учетной системе." },
  { icon: IconSparkles, title: "Контент и маркетинг", text: "Вместо часов работы над однотипными материалами — персональный генератор, который знает все характеристики вашего продукта и пишет тексты строго в вашем tone of voice за несколько секунд." },
];

const techGroups = [
  { title: "Backend и интеграции", items: ["Python (FastAPI, Flask)", "API-интеграции", "Docker", "Redis", "Celery", "PostgreSQL", "Git"] },
  { title: "AI-слой", items: ["OpenAI GPT", "Whisper", "Gemini", "Claude (Sonnet/Opus)"] },
  { title: "Быстрая сборка", items: ["Claude", "Cursor", "Google Apps Script", "Google Sheets"] },
];

export default function BusinessAutomationPortfolioPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#0F172A]">
      <section className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
        <SoftGridPattern className="hidden md:block" />
        <div className="absolute left-1/2 top-0 h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-[#F1F5F9] blur-3xl" />
        <div className="absolute -right-28 top-44 h-80 w-80 rounded-full bg-[#F1F5F9] blur-3xl" />
        <HeroDashboardGraphic />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-[#0F172A] sm:text-5xl md:text-7xl">Практик на стыке бизнес-процессов, маркетплейсов и технологий.</h1>
            <div className="mt-8 max-w-3xl space-y-5 text-xl leading-9 text-[#475569] md:text-2xl">
              <p>Я разбираю реальные задачи бизнеса:</p>
              <p>Нахожу, где компания теряет деньги, время или контроль.</p>
              <p>Превращаю хаос в понятную логику.</p>
              <p>Собираю рабочий инструмент и проверяю его на живых сценариях.</p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {focusCards.map((item) => {
                const Icon = item.icon;
                return <Card key={item.title} className="rounded-[2rem] bg-white/85 backdrop-blur"><CardContent className="p-6"><Icon className="mb-4 h-7 w-7 text-[#0F172A]" /><div className="text-xs font-medium uppercase tracking-[0.22em] text-[#64748B]">{item.title}</div><div className="mt-2 text-lg font-medium text-[#0F172A]">{item.text}</div></CardContent></Card>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Бэкграунд" title="Бизнес, операционка и IT" text="Мой опыт — это сочетание практики внутри бизнеса и системного подхода в крупном IT. Я понимаю, как процессы выглядят в таблицах, и знаю, как они работают в реальности на складе или в торговом зале." />
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="rounded-[2rem]"><CardContent className="p-7 md:p-8"><div className="mb-4 inline-flex rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-medium text-[#475569]">8 лет в продажах, рознице и управлении</div><h3 className="text-2xl font-semibold tracking-tight text-[#0F172A]">Прошёл путь от продавца и кладовщика до управляющего розничными магазинами с оборотом до 40 млн ₽.</h3><div className="mt-6 space-y-5 leading-8 text-[#475569]"><p>Это был практический опыт внутри живой операционки: инвентаризации, складские потери, приёмка и отгрузка товара, товарные остатки, кассовая дисциплина, планы продаж, KPI, графики, табели, отчётность, организация открытия магазинов с нуля и ежедневное управление людьми.</p><p>Работал руководителем отдела продаж: лиды, воронки, конверсии, трафик, телефония, контроль обработки заявок. Я точно знаю, в каких местах процесса обычно теряются клиенты и деньги.</p></div></CardContent></Card>
            <Card className="rounded-[2rem]"><CardContent className="p-7 md:p-8"><div className="mb-4 inline-flex rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-medium text-[#475569]">6 лет в IT внутри корпоративной среды</div><h3 className="text-2xl font-semibold tracking-tight text-[#0F172A]">Работал в бизнес- и системном анализе в крупных компаниях.</h3><div className="mt-6 space-y-5 leading-8 text-[#475569]"><p>Я отвечал за перевод потребностей бизнеса на язык системной логики, проектировал решения, управлял IT-командами и вёл сложные регуляторные проекты.</p><p>Для меня IT — это не набор технических задач, а способ превратить хаос в рабочий интерфейс и результат, которым действительно можно пользоваться. За каждой операцией в системе я вижу живых людей, сроки и ответственность.</p></div></CardContent></Card>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div><div className="text-sm font-medium uppercase tracking-[0.24em] text-[#64748B]">Моя роль</div><h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">Я не классический РП, не чистый аналитик и не разработчик «по ТЗ».</h2></div>
            <div className="space-y-6 text-lg leading-8 text-[#475569]"><p>Мой профиль — практическая автоматизация: разобраться в процессе, увидеть боль, придумать простое и рабочее решение и быстро собрать инструмент, который уберет рутину и ошибки.</p><div className="pt-2"><h3 className="text-2xl font-semibold tracking-tight text-[#0F172A]">Мой путь к решению всегда выглядит так:</h3><div className="mt-6 grid gap-4 sm:grid-cols-2">{approach.map((item) => { const Icon = item.icon; return <Card key={item.title} className="rounded-[2rem]"><CardContent className="p-6"><Icon className="mb-4 h-7 w-7 text-[#0F172A]" /><h4 className="text-lg font-semibold text-[#0F172A]">{item.title}</h4><p className="mt-3 text-base leading-7 text-[#475569]">{item.text}</p></CardContent></Card>; })}</div></div></div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div><div className="text-sm font-medium uppercase tracking-[0.24em] text-[#64748B]">Сильная зона</div><h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">Задачи, которые зависают между бизнесом, IT и операционкой.</h2><p className="mt-6 text-lg leading-8 text-[#475569]">Я особенно полезен там, где недостаточно просто нанять программиста, а нужно одновременно понять бизнес-процесс, деньги, данные, интеграции и ограничения системы.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">{transformations.map((item) => <Card key={item} className="rounded-[2rem]"><CardContent className="flex h-full items-start gap-3 p-6"><IconArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#64748B]" /><p className="leading-7 text-[#475569]">{item}</p></CardContent></Card>)}</div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Типовые ситуации" title="Где я могу быть полезен" text="В бизнесах, которые уже выросли из ручного управления, но ещё не пришли к зрелому IT-контуру: процессы есть, деньги есть, операционка есть — а прозрачности и связности не хватает." /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{situations.map((item, index) => <Card key={item} className="h-full rounded-[2rem]"><CardContent className="p-6"><div className="mb-5 flex h-9 w-9 items-center justify-center rounded-2xl bg-[#F1F5F9] text-sm font-semibold text-[#475569]">{index + 1}</div><p className="leading-7 text-[#475569]">{item}</p></CardContent></Card>)}</div></div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl"><SectionTitle title="Примеры реализованных проектов" text="Ниже — продукты, MVP и прикладные инструменты, где я сам собирал бизнес-логику, сценарии, интерфейс или рабочий контур вокруг маркетплейсов, складских операций, AI и регулярной рутины." /><div className="grid gap-6 lg:grid-cols-2">{projects.map((project) => { const Icon = project.icon; return <Card key={project.title} className="h-full rounded-[2rem]"><CardContent className="relative min-h-full p-7 pb-24 md:p-8 md:pb-24"><div className="mb-6 flex items-start justify-between gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F1F5F9]"><Icon className="h-6 w-6 text-[#0F172A]" /></div><span className="max-w-[74%] rounded-full bg-[#F1F5F9] px-3 py-1 text-right text-xs font-medium leading-5 text-[#475569]">Статус: {project.status}</span></div><h3 className="text-2xl font-semibold tracking-tight text-[#0F172A]">{project.title}</h3><div className="mt-6 space-y-5 text-[#475569]"><div><div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Проблема</div><p className="leading-7">{project.problem}</p></div><div><div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Решение</div><p className="leading-7">{project.solution}</p></div><div><div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">Эффект</div><p className="leading-7">{project.effect}</p></div></div><div aria-hidden="true" className="absolute bottom-7 right-7 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F1F5F9]"><Icon className="h-8 w-8 text-[#C8A96A]" /></div></CardContent></Card>; })}</div></div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#020617] px-6 py-16 text-white md:px-12 md:py-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#C8A96A]/10 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
          <SoftGridPattern className="opacity-[0.08]" />
          <div className="relative">
            <SectionTitle eyebrow="Прикладной AI в бизнесе" title="Не абстракция, а рабочий инструмент" text="Для меня AI — это не модный тренд, а ежедневная практика. Я постоянно использую нейросети для написания кода, проектирования логики и автоматизации собственных задач." tone="dark" />
            <div className="mx-auto max-w-4xl space-y-6 text-lg leading-8 text-white/70"><p>И именно потому, что я работаю с ними каждый день, я вижу: технологии сделали квантовый скачок. То, что ещё пару лет назад казалось фантастикой и требовало вовлечения команды специалистов и долгих месяцев классической разработки, сегодня собирается в первый рабочий контур за пару недель. Нейросети научились «понимать» смыслы, а не просто перекладывать цифры.</p><p>У бизнеса появились новые возможности.</p></div>
            <div className="relative mx-auto my-16 flex min-h-[260px] max-w-4xl items-center justify-center">
              <div className="absolute h-56 w-56 rounded-full border border-white/10" />
              <div className="absolute h-80 w-80 rounded-full border border-white/5" />
              <div className="relative z-10 rounded-[2.5rem] border border-[#C8A96A]/30 bg-white/[0.07] px-8 py-10 text-center shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur md:px-12">
                <div className="text-xs font-semibold uppercase tracking-[0.32em] text-[#C8A96A]">ПРЕДСТАВЬТЕ</div>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">ЧТО ВАША СИСТЕМА УМЕЕТ ДЕЛАТЬ ТАК:</h3>
              </div>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {aiCases.map((item) => { const Icon = item.icon; return <div key={item.title}><div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10"><Icon className="h-6 w-6 text-[#C8A96A]" /></div><h4 className="text-xl font-semibold tracking-tight text-white">{item.title}</h4><p className="mt-4 leading-7 text-white/65">{item.text}</p></div></div>; })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
        <div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Стек" title="Инструменты, которыми я собираю решения" text="Важна не технология сама по себе, а связка: бизнес-анализ + данные + интерфейс." /><div className="grid gap-5 md:grid-cols-3">{techGroups.map((group) => <Card key={group.title} className="h-full rounded-[2rem]"><CardContent className="p-7"><h3 className="text-xl font-semibold tracking-tight text-[#0F172A]">{group.title}</h3><div className="mt-6 flex flex-wrap gap-2">{group.items.map((item) => <Pill key={item}>{item}</Pill>)}</div></CardContent></Card>)}</div></div>
      </section>
    </main>
  );
}
