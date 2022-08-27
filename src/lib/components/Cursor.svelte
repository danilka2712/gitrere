<script context="module">
	import { writable, derived } from 'svelte/store';
	import { spring } from 'svelte/motion';

	const coords = spring({x: 0, y: 0}, {
		stiffness: 1, damping: 1
	});

	const coordsOuter = spring({x: 0, y: 0}, {
		stiffness: 0.1, damping: 0.7
	});

	function createCursorStore() {
		const { subscribe, update } = writable({x: 0, y: 0, text: ''});

		return {
			subscribe,
			setText: (event) => {
				return update(n => ({...n, text: event.target.getAttribute('data-cursor')}))
			},
			resetText: () => update(n => ({...n, text: ''})),
			setCoords: ({x, y}) => {
				coords.set({x, y});
				coordsOuter.set({x, y});
				return update(n => ({...n, x, y}));
			},
		};
	}

	const cursorStore = createCursorStore();

	export function useCursor(node) {
		node.addEventListener('mousemove', cursorStore.setCoords);
		node.querySelectorAll('[data-cursor]').forEach(el => {
			el.addEventListener('mouseenter', cursorStore.setText);
			el.addEventListener('mouseleave', cursorStore.resetText)
		});
	} 
</script>

<div class="circle-cursor circle-cursor--inner" style="transform:translate3d({$coords.x}px, {$coords.y}px, 0px)" class:hovered={$cursorStore.text.length > 1}>
        {#if $cursorStore.text.length > 1}
            {$cursorStore.text}
        {/if}
    </div>
    <div class="circle-cursor circle-cursor--outer" style="transform:translate3d({$coordsOuter.x}px, {$coordsOuter.y}px, 0px)" class:hovered={$cursorStore.text.length > 1}></div>

<style>
    .circle-cursor {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: none;
        border-radius: 50%;
        font-size: 0;
        transform-origin: 50% center;
        transition: scale .5s ease-in-out;
        transform: translate3d(var(--position-x), var(--position-y), 0px)
    }
    .circle-cursor.circle-cursor--inner {
        width: 8px;
        height: 8px;
        margin-left: -4px;
        margin-top: -4px;
        z-index: 11000;
        background: var(--color-cursor);
        color: var(--color-cursor);
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
    }
    .circle-cursor.circle-cursor--inner.hovered {
        width: 75px;
        height: 75px;
        margin-left: -37.5px;
        margin-top: -37.5px;
        text-align: center;
        font-size: 12px;
        background: transparent;
    }
    .circle-cursor.circle-cursor--outer {
        width: 28px;
        height: 28px;
        margin-left: -14px;
        margin-top: -14px;
        border: 1px solid var(--color-cursor);
        z-index: 12000;
        opacity: 0.2;
    }
    .circle-cursor.circle-cursor--outer.hovered {
        width: 105px;
        height: 105px;
        margin-left: -52.5px;
        margin-top: -52.5px;
        text-align: center;
        font-size: 12px;
        background: transparent;
        opacity: 1;
    }
</style>
