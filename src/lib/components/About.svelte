<div class="flex mt-32 gap-14">
    <div>
        <h1 class="text-base">Выберите услугу</h1>
        <div class=" relative">
            <input
                bind:value={items}
                class="h-12 text-xl mt-3 w-56 border items-center flex justify-center px-3 pl-[3.3em] rounded-sm outline-none border-[#7d7d7d] bg-[#121212]"
                type="text"
            />
            <button
                class=" cursor-pointer absolute top-1/3 left-4 flex items-center justify-center"
                on:click={clickMinus}
            >
                <Icon class=" rotate-180" icon="bi:arrow-right" />
            </button>
            <button
                class=" cursor-pointer absolute top-1/3 right-4 flex items-center justify-center"
                on:click={clickPlus}
            >
                <Icon icon="bi:arrow-right" />
            </button>
        </div>
    </div>
    <div>
        <h1 class="text-base">Имя</h1>
        <input
            class="h-12 capitalize text-xl placeholder:text-[#7d7d7d] mt-3 w-80 border px-3 rounded-sm outline-none border-[#7d7d7d] bg-[#121212]"
            type="text" placeholder="Введите ваше имя"
        />
    </div>
    <div>
        <h1 class="text-base">Телефон</h1>

        <input bind:value={number}
            class="h-12 text-xl mt-3 w-80 placeholder:text-[#7d7d7d] border px-3 rounded-sm outline-none border-[#7d7d7d] bg-[#121212]"
            type="tel" maxlength="13"
        />
    </div>
</div>