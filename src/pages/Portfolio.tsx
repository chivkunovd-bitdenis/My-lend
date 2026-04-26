import React from "react";

type IconProps = {
  className?: string;
  title?: string;
};

function IconBase({
  className,
  title,
  children,
}: React.PropsWithChildren<IconProps>) {
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
      <path
        d="M4 7c0 1.66 3.58 3 8 3s8-1.34 8-3-3.58-3-8-3-8 1.34-8 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 7v10c0 1.66 3.58 3 8 3s8-1.34 8-3V7"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </IconBase>
  );
}

function IconBrain(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M9.5 4.5c-1.66 0-3 1.34-3 3v.5a2.5 2.5 0 0 0 0 5v.5c0 1.66 1.34 3 3 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14.5 4.5c1.66 0 3 1.34 3 3v.5a2.5 2.5 0 0 1 0 5v.5c0 1.66-1.34 3-3 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9.5 9h5M9.5 12h5M9.5 15h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </IconBase>
  );
}

function IconBriefcase(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M9 7V6.5A2.5 2.5 0 0 1 11.5 4h1A2.5 2.5 0 0 1 15 6.5V7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4.5 8.5h15v9a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 4.5 17.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 12.2c2.7 1.8 5.2 2.7 7.5 2.7s4.8-.9 7.5-2.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </IconBase>
  );
}

function IconArrowRight(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

function IconWorkflow(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M7 7h4v4H7V7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M13 13h4v4h-4v-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M11 9h3.2a2.8 2.8 0 0 1 2.8 2.8V13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </IconBase>
  );
}

function IconFileText(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M7 4h7l3 3v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 12h8M8 16h8M8 8h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </IconBase>
  );
}

function IconLayers(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M12 3 3.5 7.5 12 12l8.5-4.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 12.2 12 16.7l8.5-4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 16.9 12 21.4l8.5-4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

function IconWrench(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M21 7.5a5.5 5.5 0 0 1-7.2 5.2L7.1 19.4a2 2 0 0 1-2.8 0l-.7-.7a2 2 0 0 1 0-2.8l6.7-6.7A5.5 5.5 0 0 1 16.5 3l-2.4 2.4 1.5 1.5L18 4.5A5.5 5.5 0 0 1 21 7.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

function IconChart(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M5 19V5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5 19h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 15l3-3 3 2 4-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

function IconPackageCheck(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M12 3 4.5 7.2V16.8L12 21l7.5-4.2V7.2L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 12.2 11 15l4.8-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

function IconSparkles(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M12 3l1.2 3.6L17 8l-3.8 1.4L12 13l-1.2-3.6L7 8l3.8-1.4L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M5 13l.8 2.4L8 16l-2.2.6L5 19l-.8-2.4L2 16l2.2-.6L5 13Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M19 13l.8 2.4L22 16l-2.2.6L19 19l-.8-2.4L16 16l2.2-.6L19 13Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

function IconBoxes(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M7 7h6v6H7V7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M13 11h4v4h-4v-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 13v4h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </IconBase>
  );
}

type CardProps = React.PropsWithChildren<{
  className?: string;
}>;

function Card({ className, children }: CardProps) {
  return (
    <div
      className={[
        "rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06),_0_12px_28px_rgba(15,23,42,0.08)]",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function CardContent({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={className}>{children}</div>;
}

const pains = [
  "прибыль считается примерно, а решения принимаются по обороту",
  "данные живут в Excel, чатах, кабинетах и отдельных отчётах",
  "сотрудники регулярно делают руками однотипные операции",
  "склад, остатки и статусы держатся на памяти людей",
  "CRM или учётная система есть, но процесс всё равно работает криво",
  "собственник не видит управленческую картину в одном окне",
  "AI хочется внедрить, но непонятно, куда именно и зачем",
  "разработка кажется дорогой, долгой и технически непонятной",
];

const approach = [
  {
    icon: IconWorkflow,
    title: "Разбираю процесс",
    text: "Смотрю, как задача работает сейчас: где появляются данные, кто что делает руками, где возникают ошибки, где бизнес теряет скорость, деньги или контроль.",
  },
  {
    icon: IconFileText,
    title: "Описываю бизнес-логику",
    text: "Перевожу хаос из таблиц, чатов и устных договорённостей в понятную систему: роли, сценарии, статусы, правила расчётов, исключения и контрольные точки.",
  },
  {
    icon: IconLayers,
    title: "Проектирую решение",
    text: "Продумываю пользовательские сценарии, структуру данных, интеграции, ограничения и логику будущего инструмента так, чтобы он решал задачу бизнеса, а не просто выглядел как IT-система.",
  },
  {
    icon: IconWrench,
    title: "Собираю рабочий инструмент",
    text: "Делаю MVP, интерфейс, дашборд, бота, API-интеграцию, AI-сценарий или внутренний сервис под конкретную задачу и проверяю его на реальных сценариях.",
  },
];

const projects = [
  {
    title: "Финансовая оцифровка для WB-селлеров",
    status: "Рабочий продукт, есть реальные пользователи",
    icon: IconChart,
    problem:
      "Селлер видит заказы, продажи и оборот, но не всегда понимает, сколько реально зарабатывает после себестоимости, комиссий, логистики, хранения, рекламы и операционных расходов.",
    solution:
      "Система получает данные кабинета по API Wildberries, автоматически считает маржинальность и рентабельность по артикулам, показывает данные по дням и суммарно, учитывает ключевые расходы, отображает выполнение плана и помогает быстрее находить товары, которые тянут прибыль вниз.",
    effect:
      "Собственник видит не грязный оборот, а управленческую финансовую картину: где прибыль, где убыток, какие позиции стоит усиливать, а какие пересматривать.",
  },
  {
    title: "WMS для фулфилментов и складских операций",
    status: "MVP, готовится к тестированию на реальных сценариях",
    icon: IconPackageCheck,
    problem:
      "При ручном складском учёте бизнес зависит от памяти сотрудников, сталкивается с ошибками в приёмке, сборке, остатках, отгрузках и спорных ситуациях.",
    solution:
      "MVP покрывает заявки селлеров, карточки товаров, приёмку, заказы, остатки, адресное хранение, движение товара, статусы операций, сценарии API-интеграций и логику работы со штрихкодами.",
    effect:
      "Цель — сделать склад управляемым: видеть остатки и движение товара, снизить риск ошибок и уменьшить зависимость процесса от отдельных сотрудников.",
  },
  {
    title: "Инструмент записи и саммаризации встреч",
    status: "Прикладной AI-инструмент",
    icon: IconBrain,
    problem:
      "После встреч договорённости, решения и задачи часто остаются в голове участников или фиксируются вручную и нерегулярно.",
    solution:
      "Инструмент записывает аудио и автоматически превращает его в текст, структурирует и саммаризирует, сохраняет готовый результат в рабочую папку.",
    effect:
      "Встречи превращаются в структурированные итоги: решения, задачи, договорённости и ключевые тезисы фиксируются автоматически.",
  },
  {
    title: "Автопостинг в Pinterest",
    status: "Инструмент для контент-рутины",
    icon: IconSparkles,
    problem:
      "Контент-маркетинг часто упирается не в идеи, а в ручную рутину: подготовить, загрузить, оформить и опубликовать десятки единиц контента.",
    solution:
      "Решение автоматизирует массовую публикацию контента и помогает тестировать гипотезы органического трафика с меньшей ручной нагрузкой.",
    effect:
      "Бизнес получает возможность чаще публиковать контент и дешевле проверять каналы продвижения без пропорционального роста ручной работы.",
  },
  {
    title: "AI-бот для ответов на отзывы WB",
    status: "AI-сценарий для маркетплейсов",
    icon: IconBoxes,
    problem:
      "Отзывы важны для доверия к карточке, но регулярная обработка отнимает время и часто делается нерегулярно.",
    solution:
      "Бот генерирует ответы на отзывы покупателей с учётом контекста, особенностей товара и желаемого тона коммуникации бренда.",
    effect:
      "Снижается ручная нагрузка, коммуникация с покупателями становится регулярнее, а тон бренда — более единым.",
  },
  {
    title: "Telegram-бот для саммаризации видео",
    status: "R&D / экспериментальный инструмент",
    icon: IconFileText,
    problem:
      "Длинные обучающие и экспертные видео сложно быстро перерабатывать в прикладные заметки и выводы.",
    solution:
      "Бот извлекает суть из длинного контента: транскрибирует, структурирует, делает краткое саммари и выделяет ключевые тезисы.",
    effect:
      "Помогает быстрее превращать длинные материалы в понятный текстовый конспект для дальнейшей работы.",
  },
];

const background = [
  "руководство розничными магазинами",
  "складские операции и понимание физической логики склада",
  "продажи и роль РОПа",
  "IT-проекты в логистике",
  "IT-проекты в девелопменте",
  "собственный опыт в e-commerce и маркетплейсах",
  "разработка прикладных AI- и automation-продуктов",
];

const tech = [
  "Python",
  "React",
  "Google Apps Script",
  "Docker",
  "API маркетплейсов",
  "OpenAI GPT API",
  "Whisper API",
  "Telegram Bot API",
  "Cursor",
  "Claude",
  "Gemini",
  "Google Sheets / дашборды",
  "low-code",
  "AI-assisted development",
];

function SectionTitle({
  eyebrow,
  title,
  text,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <div
          className={[
            "mb-3 text-sm font-medium uppercase tracking-[0.24em]",
            isDark ? "text-white/50" : "text-[#64748B]",
          ].join(" ")}
        >
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={[
          "text-3xl font-semibold tracking-tight md:text-5xl",
          isDark ? "text-white" : "text-[#0F172A]",
        ].join(" ")}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={[
            "mt-5 text-lg leading-8",
            isDark ? "text-white/65" : "text-[#475569]",
          ].join(" ")}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

function Pill({ children }: React.PropsWithChildren) {
  return (
    <span className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm text-[#475569] shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
      {children}
    </span>
  );
}

function SoftGridPattern({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={[
        "pointer-events-none absolute inset-0 opacity-[0.45]",
        className,
      ].join(" ")}
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)",
        backgroundSize: "42px 42px",
        maskImage:
          "radial-gradient(circle at center, black 0%, transparent 68%)",
      }}
    />
  );
}

function HeroDashboardGraphic() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-6 top-12 hidden w-[390px] xl:block 2xl:w-[500px]"
    >
      <div className="relative rounded-[2.5rem] border border-white/70 bg-white/65 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur">
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#C8A96A]/20 blur-2xl" />
        <div className="absolute -bottom-10 left-10 h-32 w-32 rounded-full bg-[#F1F5F9] blur-2xl" />

        <div className="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="h-2.5 w-24 rounded-full bg-[#0F172A]" />
              <div className="mt-2 h-2 w-36 rounded-full bg-[#CBD5E1]" />
            </div>
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#C8A96A]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[74, 48, 91].map((height, index) => (
              <div key={height} className="rounded-3xl bg-[#F1F5F9] p-3">
                <div className="mb-8 h-2 w-12 rounded-full bg-[#CBD5E1]" />
                <div className="flex h-24 items-end gap-1.5">
                  <span
                    className="w-full rounded-full bg-[#0F172A]"
                    style={{ height: `${height}%` }}
                  />
                  <span
                    className="w-full rounded-full bg-[#C8A96A]/80"
                    style={{ height: `${Math.max(32, height - 18 + index * 6)}%` }}
                  />
                  <span
                    className="w-full rounded-full bg-[#CBD5E1]"
                    style={{ height: `${Math.max(26, height - 28)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-3xl border border-[#E2E8F0] bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="h-2.5 w-28 rounded-full bg-[#0F172A]" />
              <div className="h-2 w-12 rounded-full bg-[#C8A96A]" />
            </div>
            <div className="space-y-2.5">
              {[88, 64, 76].map((width) => (
                <div key={width} className="h-2 rounded-full bg-[#F1F5F9]">
                  <div
                    className="h-2 rounded-full bg-[#94A3B8]"
                    style={{ width: `${width}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessMapGraphic() {
  return (
    <div
      aria-hidden="true"
      className="relative min-h-[260px] overflow-hidden rounded-[2.5rem] border border-[#E2E8F0] bg-white p-6 shadow-soft"
    >
      <SoftGridPattern />
      <div className="relative flex h-full min-h-[210px] items-center justify-center">
        <div className="absolute h-40 w-40 rounded-full border border-[#E2E8F0]" />
        <div className="absolute h-64 w-64 rounded-full border border-[#E2E8F0]/70" />
        <div className="absolute h-16 w-16 rounded-3xl bg-[#020617] shadow-card" />
        <div className="absolute left-6 top-8 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 text-xs font-medium text-[#475569] shadow-soft">
          Процесс
        </div>
        <div className="absolute right-8 top-12 rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9] px-4 py-3 text-xs font-medium text-[#475569]">
          Данные
        </div>
        <div className="absolute bottom-8 left-10 rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9] px-4 py-3 text-xs font-medium text-[#475569]">
          Правила
        </div>
        <div className="absolute bottom-10 right-8 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 text-xs font-medium text-[#475569] shadow-soft">
          MVP
        </div>
        <span className="absolute left-[30%] top-[34%] h-2.5 w-2.5 rounded-full bg-[#C8A96A]" />
        <span className="absolute right-[32%] top-[58%] h-2.5 w-2.5 rounded-full bg-[#C8A96A]" />
      </div>
    </div>
  );
}

function DarkProcessGraphic() {
  return (
    <div
      aria-hidden="true"
      className="mb-8 grid gap-3 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 md:grid-cols-4"
    >
      {["Боль", "Логика", "Инструмент", "Контроль"].map((item, index) => (
        <div key={item} className="relative rounded-3xl bg-white/[0.06] p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-white/45">
              0{index + 1}
            </span>
            <span className="h-2 w-2 rounded-full bg-[#C8A96A]" />
          </div>
          <div className="text-sm font-medium text-white">{item}</div>
          <div className="mt-4 h-1.5 rounded-full bg-white/10">
            <div
              className="h-1.5 rounded-full bg-white/60"
              style={{ width: `${42 + index * 16}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function AiSignalGraphic() {
  return (
    <div
      aria-hidden="true"
      className="relative hidden min-h-[190px] overflow-hidden rounded-[2.5rem] border border-[#E2E8F0] bg-white p-5 shadow-soft sm:block"
    >
      <SoftGridPattern className="opacity-[0.35]" />
      <div className="relative grid grid-cols-3 gap-3">
        {[IconFileText, IconBrain, IconDatabase].map((Icon, index) => (
          <div
            key={index}
            className="flex h-28 items-center justify-center rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC]"
          >
            <Icon className="h-8 w-8 text-[#0F172A]" />
          </div>
        ))}
      </div>
      <div className="relative mt-4 rounded-3xl bg-[#020617] p-4">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#C8A96A]" />
          <span className="h-2 w-20 rounded-full bg-white/70" />
        </div>
        <div className="space-y-2">
          <div className="h-2 rounded-full bg-white/15">
            <div className="h-2 w-[82%] rounded-full bg-white/70" />
          </div>
          <div className="h-2 rounded-full bg-white/15">
            <div className="h-2 w-[58%] rounded-full bg-white/50" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseCardGraphic() {
  return (
    <div aria-hidden="true" className="mt-7 grid grid-cols-5 gap-2">
      {[32, 54, 76, 46, 88].map((height, index) => (
        <div key={height} className="flex h-20 items-end rounded-2xl bg-[#F1F5F9] p-2">
          <div
            className={[
              "w-full rounded-full",
              index === 4 ? "bg-[#C8A96A]" : "bg-[#CBD5E1]",
            ].join(" ")}
            style={{ height: `${height}%` }}
          />
        </div>
      ))}
    </div>
  );
}

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
            <div className="mb-8 inline-flex rounded-full border border-[#E2E8F0] bg-white/80 px-4 py-2 text-sm text-[#475569] shadow-[0_1px_2px_rgba(15,23,42,0.06)] backdrop-blur">
              Портфолио прикладной бизнес-автоматизации и AI
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-[#0F172A] sm:text-5xl md:text-7xl">
              Практик бизнес-автоматизации на стыке процессов, маркетплейсов, IT и
              AI.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#475569] md:text-2xl">
              Я разбираю реальные бизнесовые задачи: где компания теряет деньги,
              время или контроль; превращаю хаос в понятную логику; собираю
              рабочий инструмент и проверяю его на живых сценариях.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <Card className="rounded-[2rem] bg-white/85 shadow-soft backdrop-blur">
                <CardContent className="p-6">
                  <IconDatabase className="mb-4 h-7 w-7 text-[#0F172A]" />
                  <div className="text-xs font-medium uppercase tracking-[0.22em] text-[#64748B]">
                    Фокус
                  </div>
                  <div className="mt-2 text-lg font-medium text-[#0F172A]">
                    данные, процессы, управляемость
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] bg-white/85 shadow-soft backdrop-blur">
                <CardContent className="p-6">
                  <IconBrain className="mb-4 h-7 w-7 text-[#0F172A]" />
                  <div className="text-xs font-medium uppercase tracking-[0.22em] text-[#64748B]">
                    AI
                  </div>
                  <div className="mt-2 text-lg font-medium text-[#0F172A]">
                    не ради моды, а внутри регулярных задач
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] bg-white/85 shadow-soft backdrop-blur">
                <CardContent className="p-6">
                  <IconBriefcase className="mb-4 h-7 w-7 text-[#0F172A]" />
                  <div className="text-xs font-medium uppercase tracking-[0.22em] text-[#64748B]">
                    Подход
                  </div>
                  <div className="mt-2 text-lg font-medium text-[#0F172A]">
                    от боли бизнеса до рабочего MVP
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-[#64748B]">
              <span className="inline-flex h-2 w-2 rounded-full bg-[#C8A96A]" />
              <span>Минимальный мягкий акцент — только для деталей</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_0.88fr_0.7fr] lg:items-start">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-[#64748B]">
                Кто я
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
                Не классический РП, не чистый аналитик и не разработчик “по ТЗ”.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-[#475569]">
              <p>
                Мой профиль — практическая автоматизация бизнеса: разобраться в
                процессе, увидеть потери, описать логику, спроектировать решение
                и быстро собрать инструмент, который можно использовать в работе.
              </p>
              <p>
                Я не смотрю на автоматизацию как на “айтишный проект ради айтишного
                проекта”. Для меня это способ убрать конкретные потери: ручной
                труд, ошибки, непрозрачные остатки, слабую аналитику, разрозненные
                таблицы и отсутствие единой управленческой картины.
              </p>
              <p>
                В крупных задачах моя сильная зона — не обещать заменить всю
                разработку, а быстро собрать прототип, проявить бизнес-логику,
                проверить сценарии и подготовить понятную основу для дальнейшей
                работы команды.
              </p>
            </div>

            <ProcessMapGraphic />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Тип задач"
            title="Где я обычно полезен"
            text="В бизнесах, которые уже выросли из ручного управления, но ещё не пришли к зрелому IT-контуру: процессы есть, деньги есть, операционка есть — а прозрачности и связности не хватает."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pains.map((pain, index) => (
              <Card key={pain} className="h-full rounded-[2rem]">
                <CardContent className="p-6">
                  <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-2xl bg-[#F1F5F9] text-sm font-semibold text-[#475569]">
                    {index + 1}
                  </div>
                  <p className="leading-7 text-[#475569]">{pain}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#020617] px-6 py-16 text-white md:px-12 md:py-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#C8A96A]/10 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
          <div className="relative">
          <SectionTitle
            eyebrow="Подход"
            title="От неясной боли до понятного инструмента"
            text="Я не начинаю с технологии. Сначала нужно понять, что именно в процессе ломается, сколько это стоит бизнесу и какую логику надо собрать, чтобы процесс стал управляемым."
            tone="dark"
          />
          <DarkProcessGraphic />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title}>
                  <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
                    <Icon className="mb-5 h-8 w-8 text-white" />
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-4 leading-7 text-white/70">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-[#64748B]">
                Прикладной AI
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
                AI не как игрушка, а как слой внутри процесса.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#475569]">
                Нейросеть сама по себе редко решает бизнес-задачу. Ценность
                появляется, когда AI встроен в понятный сценарий: есть входящие
                данные, правила, контекст, проверка результата и место в процессе.
              </p>
              <div className="mt-8">
                <AiSignalGraphic />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "обработка отзывов и обращений",
                "лиды и первичная квалификация",
                "тексты, описания и контент",
                "изображения и визуальные материалы",
                "саммаризация встреч",
                "разбор документов",
                "внутренние базы знаний",
                "управленческие сводки и отчёты",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[2rem] border border-[#E2E8F0] bg-white p-5 shadow-soft"
                >
                  <IconArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#64748B]" />
                  <span className="leading-7 text-[#475569]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Кейсы и продукты"
            title="Что уже собирал"
            text="Ниже — не витрина абстрактных компетенций, а прикладные инструменты и продукты вокруг маркетплейсов, складских операций, AI и автоматизации регулярной рутины."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <Card key={project.title} className="h-full rounded-[2rem]">
                  <CardContent className="p-7 md:p-8">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F1F5F9]">
                        <Icon className="h-6 w-6 text-[#0F172A]" />
                      </div>
                      <span className="max-w-[74%] rounded-full bg-[#F1F5F9] px-3 py-1 text-right text-xs font-medium leading-5 text-[#475569]">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-[#0F172A]">
                      {project.title}
                    </h3>
                    <div className="mt-6 space-y-5 text-[#475569]">
                      <div>
                        <div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                          Проблема
                        </div>
                        <p className="leading-7">{project.problem}</p>
                      </div>
                      <div>
                        <div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                          Решение
                        </div>
                        <p className="leading-7">{project.solution}</p>
                      </div>
                      <div>
                        <div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                          Эффект
                        </div>
                        <p className="leading-7">{project.effect}</p>
                      </div>
                    </div>
                    <CaseCardGraphic />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <Card className="h-full rounded-[2rem]">
            <CardContent className="p-8 md:p-10">
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-[#64748B]">
                Бэкграунд
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0F172A]">
                Почему это не только про IT
              </h2>
              <p className="mt-5 leading-8 text-[#475569]">
                Мой опыт собран из разных контекстов: розница, склад, продажи, IT,
                логистика, девелопмент, маркетплейсы и собственные продукты.
                Поэтому я вижу автоматизацию через бизнесовые показатели и
                операционную реальность, а не только через интерфейс и код.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {background.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="h-full rounded-[2rem]">
            <CardContent className="p-8 md:p-10">
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-[#64748B]">
                Стек
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0F172A]">
                Инструменты, которыми собираю решения
              </h2>
              <p className="mt-5 leading-8 text-[#475569]">
                Стек для меня — не самоцель. Важнее связка: бизнес-анализ, логика
                процесса, данные, интеграции, AI и рабочий интерфейс, который
                можно использовать в реальном процессе.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {tech.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-5 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-card md:p-12">
          <SoftGridPattern className="opacity-[0.26]" />
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#F1F5F9] blur-3xl" />
          <div className="relative">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-[#64748B]">
                Форматы полезности
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
                Где такой профиль может быть нужен
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-[#475569]">
              <p>
                Такой профиль полезен в задачах, где бизнесу нужно не просто
                “нанять разработчика”, а быстро разобраться в процессе, понять,
                что именно автоматизировать, собрать рабочий прототип и проверить
                решение на реальности.
              </p>
              <p>
                Это может быть проектное участие, part-time роль, внутренняя роль
                на стыке продукта и автоматизации, позиция руководителя проектов
                развития, technical product/project manager или практик, который
                закрывает малые и средние задачи автоматизации под конкретный
                бизнес-контекст.
              </p>
              <p>
                Для больших проектов моя роль может быть в том, чтобы проявить
                бизнес-логику, собрать MVP, описать требования и подготовить
                понятную основу для полноценной команды разработки.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}

