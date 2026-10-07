function TaskCard({
  icon,
  title,
  description,
  children,
  variant = "purple",
}) {
  const colors = {
    purple: {
      border: "border-[#6d1b7b]",
      icon: "bg-[#6d1b7b]",
      hover: "hover:border-[#a13bb5]",
    },

    royal: {
      border: "border-[#8e2ca0]",
      icon: "bg-[#8e2ca0]",
      hover: "hover:border-[#b94bce]",
    },

    violet: {
      border: "border-[#a13bb5]",
      icon: "bg-[#a13bb5]",
      hover: "hover:border-[#d05ae5]",
    },
  };

  const color = colors[variant];

  return (
    <article
      className={`
        w-full
        min-h-[400px]
        flex
        flex-col
        bg-[#24102f]
        border
        ${color.border}
        ${color.hover}
        rounded-3xl
        p-5
        sm:p-6
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      `}
    >
      {/* Icon */}
      <div
        className={`
          ${color.icon}
          w-12
          h-12
          shrink-0
          rounded-2xl
          flex
          items-center
          justify-center
          text-xl
          mb-5
          shadow-lg
        `}
      >
        {icon}
      </div>

      {/* Title */}
      <div className="shrink-0">
        <h2 className="text-xl font-bold text-white">
          {title}
        </h2>

        <p className="text-sm text-[#bd91c8] mt-2 leading-6">
          {description}
        </p>
      </div>

      {/* Card content */}
      <div className="flex-1 mt-6">
        {children}
      </div>
    </article>
  );
}

export default TaskCard;