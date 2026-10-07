
import { useState } from "react";
import TaskCard from "../components/TaskCard";

function Practice() {
  // 1. Dynamic Name Changer
  const [name, setName] = useState("Arun");

  // 2. Counter
  const [count, setCount] = useState(0);

  // 3. Show / Hide
  const [showText, setShowText] = useState(false);

  // 4. Live Name Input
  const [inputName, setInputName] = useState("");

  // 5. Like Counter
  const [likes, setLikes] = useState(0);

  // Input output
  let nameOutput = "Start typing above...";

  if (inputName.trim() !== "") {
    nameOutput = `Hello, ${inputName}`;
  }

  return (
    <main className="min-h-screen bg-[#12051a] text-white py-10 sm:py-14">

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* PAGE HEADER */}
        <header className="text-center max-w-3xl mx-auto mb-10">

          <p className="text-[#c34ed5] text-sm font-semibold uppercase tracking-[0.2em]">
            Interactive Playground
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3">
            React State & Events
          </h1>

          <p className="text-[#bd91c8] mt-4 leading-7">
            Practice React state, events, conditional rendering,
            and controlled inputs through interactive cards.
          </p>

        </header>


        {/* CARDS */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
            items-stretch
          "
        >

          {/* =====================================
              1. DYNAMIC NAME CHANGER
          ====================================== */}
          <TaskCard
            icon="👤"
            title="Dynamic Name Changer"
            description="Change the name using React state and a button."
            variant="purple"
          >

            <div className="flex flex-col h-full">

              <div
                className="
                  h-28
                  bg-[#16091f]
                  border border-[#4b1857]
                  rounded-2xl
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >
                <p className="text-xs uppercase tracking-wider text-[#9870a2]">
                  Current Name
                </p>

                <p className="text-3xl font-bold text-[#f1d4f6] mt-2">
                  {name}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (name === "Arun") {
                    setName("Kumar");
                  } else {
                    setName("Arun");
                  }
                }}
                className="
                  w-full
                  mt-auto
                  pt-4
                  bg-[#6d1b7b]
                  hover:bg-[#8e2ca0]
                  active:scale-95
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                Change Name
              </button>

            </div>

          </TaskCard>


          {/* =====================================
              2. INTERACTIVE COUNTER
          ====================================== */}
          <TaskCard
            icon="🔢"
            title="Interactive Counter"
            description="Increase, decrease, or reset the number."
            variant="royal"
          >

            <div className="flex flex-col h-full">

              <div
                className="
                  h-28
                  bg-[#16091f]
                  border border-[#5c1d6b]
                  rounded-2xl
                  flex
                  flex-col
                  items-center
                  justify-center
                "
              >
                <p className="text-xs uppercase tracking-wider text-[#9870a2]">
                  Current Count
                </p>

                <p className="text-4xl font-black text-white mt-2">
                  {count}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-auto pt-4">

                <button
                  type="button"
                  onClick={() => setCount(count + 1)}
                  className="
                    py-3
                    rounded-xl
                    bg-[#8e2ca0]
                    hover:bg-[#a13bb5]
                    active:scale-95
                    font-bold
                    transition
                  "
                >
                  +
                </button>

                <button
                  type="button"
                  onClick={() => setCount(count - 1)}
                  className="
                    py-3
                    rounded-xl
                    bg-[#572061]
                    hover:bg-[#71317f]
                    active:scale-95
                    font-bold
                    transition
                  "
                >
                  −
                </button>

                <button
                  type="button"
                  onClick={() => setCount(0)}
                  className="
                    py-3
                    rounded-xl
                    bg-[#32113c]
                    hover:bg-[#461650]
                    active:scale-95
                    text-sm
                    font-semibold
                    transition
                  "
                >
                  Reset
                </button>

              </div>

            </div>

          </TaskCard>


          {/* =====================================
              3. SHOW / HIDE MESSAGE
          ====================================== */}
          <TaskCard
            icon="👁️"
            title="Show / Hide Message"
            description="Show or hide content using boolean state."
            variant="violet"
          >

            <div className="flex flex-col h-full">

              <div
                className="
                  h-28
                  bg-[#16091f]
                  border border-[#672375]
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-center
                  px-4
                "
              >

                {showText && (
                  <p className="text-[#eab8f3] font-bold text-lg">
                    Welcome to React
                  </p>
                )}

                {!showText && (
                  <p className="text-[#8f6499]">
                    Message is hidden
                  </p>
                )}

              </div>

              <button
                type="button"
                onClick={() => setShowText(!showText)}
                className="
                  w-full
                  mt-auto
                  pt-4
                  bg-[#a13bb5]
                  hover:bg-[#b94bce]
                  active:scale-95
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                {showText ? "Hide Message" : "Show Message"}
              </button>

            </div>

          </TaskCard>


          {/* =====================================
              4. LIVE NAME INPUT
          ====================================== */}
          <TaskCard
            icon="✍️"
            title="Live Name Input"
            description="Type your name and see the output instantly."
            variant="purple"
          >

            <div className="flex flex-col h-full">

              <input
                type="text"
                value={inputName}
                onChange={(event) => {
                  setInputName(event.target.value);
                }}
                placeholder="Enter your name..."
                className="
                  w-full
                  h-12
                  bg-[#16091f]
                  border border-[#5c1d6b]
                  rounded-xl
                  px-4
                  text-white
                  placeholder-[#795181]
                  outline-none
                  focus:border-[#b94bce]
                  focus:ring-2
                  focus:ring-[#6d1b7b]
                  transition
                "
              />

              <div className="mt-auto pt-4">

                <div
                  className="
                    min-h-20
                    bg-[#32113c]
                    border border-[#4b1857]
                    rounded-xl
                    px-4
                    py-3
                    flex
                    flex-col
                    justify-center
                  "
                >

                  <p className="text-xs text-[#9870a2]">
                    Live Output
                  </p>

                  <p className="text-[#edcaf4] font-semibold mt-1">
                    {nameOutput}
                  </p>

                </div>

              </div>

            </div>

          </TaskCard>


          {/* =====================================
              5. LIKE COUNTER
          ====================================== */}
          <TaskCard
            icon="❤️"
            title="Like Counter"
            description="Increase the like count every time you click."
            variant="royal"
          >

            <div className="flex flex-col h-full">

              <div
                className="
                  h-28
                  bg-[#16091f]
                  border border-[#5c1d6b]
                  rounded-2xl
                  flex
                  flex-col
                  items-center
                  justify-center
                "
              >

                <p className="text-xs uppercase tracking-wider text-[#9870a2]">
                  Total Likes
                </p>

                <p className="text-4xl font-black text-[#ffb7eb] mt-2">
                  ❤️ {likes}
                </p>

              </div>

              <button
                type="button"
                onClick={() => setLikes(likes + 1)}
                className="
                  w-full
                  mt-auto
                  pt-4
                  bg-[#8e2ca0]
                  hover:bg-[#a13bb5]
                  active:scale-95
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                ❤️ Like
              </button>

            </div>

          </TaskCard>

        </div>


        {/* BOTTOM INFORMATION */}
        <section
          className="
            mt-8
            bg-[#1d0b27]
            border border-[#4b1857]
            rounded-2xl
            p-5
            sm:p-6
          "
        >

          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-4
            "
          >

            <div>

              <h3 className="font-bold text-[#edcaf4]">
                React concepts used
              </h3>

              <p className="text-sm text-[#9870a2] mt-1">
                useState • onClick • onChange • Conditional Rendering
              </p>

            </div>

            <span
              className="
                w-fit
                px-4
                py-2
                rounded-full
                bg-[#32113c]
                border border-[#71317f]
                text-[#d7a5e0]
                text-sm
              "
            >
              5 Interactive Cards
            </span>

          </div>

        </section>

      </div>

    </main>
  );
}

export default Practice;
