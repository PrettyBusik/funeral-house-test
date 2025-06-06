import {IconProps} from "./types";

export const Icon=(props:IconProps)=> {
    const icons = {
        edit: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" viewBox="0 0 20 20">
                <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M7.241 16.875H3.75a.625.625 0 0 1-.625-.625v-3.491a.625.625 0 0 1 .183-.442l9.375-9.375a.625.625 0 0 1 .884 0l3.491 3.491a.625.625 0 0 1 0 .884l-9.375 9.375a.627.627 0 0 1-.442.183ZM10.625 5 15 9.375M7.46 16.835 3.165 12.54"/>
            </svg>
        ),
        trash: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                <path stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M16.875 4.375H3.125M8.125 8.125v5M11.875 8.125v5M15.625 4.375V16.25a.624.624 0 0 1-.625.625H5a.625.625 0 0 1-.625-.625V4.375M13.125 4.375v-1.25a1.25 1.25 0 0 0-1.25-1.25h-3.75a1.25 1.25 0 0 0-1.25 1.25v1.25"/>
            </svg>
        ),
        trashWhite: (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="none">
                <path stroke="#ffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M16.875 4.375H3.125M8.125 8.125v5M11.875 8.125v5M15.625 4.375V16.25a.624.624 0 0 1-.625.625H5a.625.625 0 0 1-.625-.625V4.375M13.125 4.375v-1.25a1.25 1.25 0 0 0-1.25-1.25h-3.75a1.25 1.25 0 0 0-1.25 1.25v1.25"/>
            </svg>
        ),
        add: (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="none">
                <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M18.334 9.583v2.584c0 1.867 0 2.8-.364 3.513a3.333 3.333 0 0 1-1.456 1.457c-.713.363-1.647.363-3.514.363H7c-1.867 0-2.8 0-3.513-.363A3.333 3.333 0 0 1 2.03 15.68c-.363-.713-.363-1.646-.363-3.513V7.833c0-1.867 0-2.8.363-3.513.32-.627.83-1.137 1.457-1.457C4.2 2.5 5.133 2.5 7 2.5h3.417m5.417 4.167v-5m-2.5 2.5h5m-5 5.833a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z"/>
            </svg>
        ),
        check: (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="none">
                <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="m16.875 5.625-8.75 8.75L3.75 10"/>
            </svg>
        ),
        company: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                <g stroke="#fff" stroke-linecap="round" stroke-linejoin="round" opacity=".9">
                    <path stroke-width="1.2"
                          d="M16.875 5.625H3.125a.625.625 0 0 0-.625.625v10c0 .345.28.625.625.625h13.75c.346 0 .625-.28.625-.625v-10a.625.625 0 0 0-.625-.625ZM13.125 5.625v-1.25a1.25 1.25 0 0 0-1.25-1.25h-3.75a1.25 1.25 0 0 0-1.25 1.25v1.25"/>
                    <path stroke-width="1.2" d="M17.5 9.868a14.93 14.93 0 0 1-7.5 2.007 14.93 14.93 0 0 1-7.5-2.006"/>
                    <path d="M9.063 9.375h1.874"/>
                </g>
            </svg>
        ),
        settings: (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="none">
                <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                      stroke-width="1.5"
                      d="M4.086 7.156c.14-.297.305-.578.492-.851l-.031-2.032c0-.187.078-.367.226-.492a8.105 8.105 0 0 1 2.47-1.43.605.605 0 0 1 .53.055l1.743 1.047c.328-.023.656-.023.984 0l1.742-1.047a.653.653 0 0 1 .54-.054c.89.32 1.726.796 2.468 1.421a.62.62 0 0 1 .219.493l-.031 2.03c.187.274.351.556.492.852l1.773.985c.164.094.281.25.313.437.164.93.172 1.899 0 2.844a.623.623 0 0 1-.313.438l-1.773.984c-.14.297-.305.578-.492.851l.03 2.032a.638.638 0 0 1-.226.492 8.109 8.109 0 0 1-2.469 1.43.605.605 0 0 1-.53-.055L10.5 16.539a6.91 6.91 0 0 1-.984 0l-1.743 1.047a.653.653 0 0 1-.539.055 8.067 8.067 0 0 1-2.468-1.422.62.62 0 0 1-.22-.492l.032-2.032a6.17 6.17 0 0 1-.492-.851l-1.773-.985A.623.623 0 0 1 2 11.422a8.087 8.087 0 0 1 0-2.844.623.623 0 0 1 .313-.437l1.773-.985Z"/>
                <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                      stroke-width="1.5" d="M10 13.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"/>
            </svg>
        ),
        signOut: (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="none">
                <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M13.595 6.719 16.875 10l-3.28 3.281M8.125 10h8.748M8.125 16.875H3.75a.625.625 0 0 1-.625-.625V3.75a.625.625 0 0 1 .625-.625h4.375"/>
            </svg>
        ),
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
                <path stroke="#fff"
                      d="M18 0c4.97 0 9.471 2.015 12.728 5.272C34.081 8.624 36 13.272 36 18c0 4.97-2.014 9.47-5.272 12.728A17.945 17.945 0 0 1 18 36c-4.97 0-9.47-2.015-12.728-5.272A17.942 17.942 0 0 1 0 18C0 8.082 8.084 0 18 0Zm-2.464 34.598c.394-.975.6-2.1.67-3.235a15.17 15.17 0 0 0-.335-4.198c-.27-1.171-1.13-2.075-2.292-2.886-3.324 2.265-7.876 2.032-11.037.257a16.797 16.797 0 0 0 3.594 5.328 16.73 16.73 0 0 0 9.4 4.734ZM1.841 22.531c3.035 2.198 7.249 2.905 10.569 1.01a57.466 57.466 0 0 0-1.907-1.044c-2.796-1.485-7.074-3.794-8.952-7.823A16.868 16.868 0 0 0 1.221 18c0 1.57.216 3.09.62 4.53Zm.274-9.946c.392 2.756 3.723 5.573 5.436 6.752.418-.607.791-1.672.971-2.995a12.325 12.325 0 0 0-.192-4.347c-1.2-1.39-2.267-2.993-2.961-5.04a16.753 16.753 0 0 0-3.254 5.63Zm4.238-6.663c1.044 3.656 3.408 5.899 5.625 8.001.548.52 1.087 1.03 1.598 1.554.367-3.78-.984-9.45-3.888-12.055a16.842 16.842 0 0 0-3.335 2.5Zm4.461-3.088c3.27 3.348 4.643 9.352 3.858 13.846.697.835 1.298 1.732 1.739 2.759.705 1.647 1.27 3.678 1.572 6.212.006-.103.011-.206.018-.307.164-2.678.516-4.799 1.05-6.503.408-3.8-.463-5.423-1.288-6.96-.86-1.601-2.654-5.636-1.434-10.577a16.643 16.643 0 0 0-5.515 1.53Zm6.65-1.604c-1.127 4.397.625 8.623 1.398 10.06.601 1.12 1.226 2.283 1.454 4.14 1.713-3.355 2.502-10.111.803-13.92a16.871 16.871 0 0 0-3.655-.28Zm4.926.571c1.132 3.12.928 7.41.553 9.325.966-.49 2.218-1.399 3.36-2.45 1.196-1.102 2.244-2.336 2.67-3.37a16.75 16.75 0 0 0-6.583-3.505ZM29.927 6.2c-.58 1.119-1.62 2.33-2.78 3.395-1.554 1.432-3.36 2.637-4.56 3.024-.405 1.46-.947 2.852-1.445 4.13-.331.851-.642 1.65-.88 2.402h-.003c-.512 1.612-.853 3.654-1.012 6.267-.03.469-.052.955-.07 1.46.099-.417.214-.8.349-1.14l-.086-.035c1.185-2.905 2.304-5.526 4.305-7.696.211-.23.433-.453.664-.671 1.95-2.016 3.783-4.063 5.109-6.133.753-1.177 1.342-2.361 1.691-3.55-.4-.508-.827-.994-1.282-1.453Zm2.175 2.704c-.384 1.002-.907 1.993-1.534 2.973a28.821 28.821 0 0 1-2.046 2.774c1.253-.556 3.611-1.48 5.415-1.91a16.734 16.734 0 0 0-1.835-3.837Zm2.182 5.035c-4.232.934-7.814 2.954-9.62 4.913-1.187 1.287-2.054 2.78-2.822 4.422 1.272-.787 2.612-1.172 3.982-1.566 2.24-.643 6.975-2.718 8.783-6.117-.08-.56-.19-1.111-.323-1.652Zm.492 3.727c-1.938 2.49-5.423 4.241-7.102 4.79.665.164 1.3.378 1.904.628 1.35.558 2.548 1.292 3.62 2.037a16.706 16.706 0 0 0 1.578-7.455Zm-2.155 8.573c-1.047-.735-2.214-1.464-3.517-2.002-1.319-.546-2.786-.901-4.422-.878-1.264.423-2.471.985-3.553 2.067v-.002c-.521.527-.86 1.853-1.015 3.509-.163 1.74-.105 3.8.17 5.692a16.73 16.73 0 0 0 9.581-4.76 16.838 16.838 0 0 0 2.756-3.626Zm-22.863-9.73c-.2 1.475-.643 2.716-1.16 3.501.822.497 1.669.947 2.491 1.384 2.468 1.31 4.727 2.511 5.67 4.538-.282-2.469-.821-4.428-1.496-6.003-.846-1.973-2.452-3.496-4.145-5.101a82.82 82.82 0 0 1-1.286-1.238 13.484 13.484 0 0 1-.074 2.92Z"/>
            </svg>
        ),
        search: (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="none">
                <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M9.063 15.625a6.562 6.562 0 1 0 0-13.125 6.562 6.562 0 0 0 0 13.125ZM13.703 13.703 17.5 17.5"/>
            </svg>
        ),
        cancel: (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="none">
                <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="m15.625 4.375-11.25 11.25M15.625 15.625 4.375 4.375"/>
            </svg>
        ),
        contractor: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                <path stroke="#fff" stroke-miterlimit="10" stroke-width="1.5"
                      d="M9.333 3.707a5.733 5.733 0 0 1 4.394 5.566v1.274m-11.454 0V9.273a5.713 5.713 0 0 1 4.394-5.566M13.727 10.547H2.273a1.273 1.273 0 0 0 0 2.546h11.454a1.273 1.273 0 1 0 0-2.546Z"/>
                <path stroke="#fff" stroke-miterlimit="10" stroke-width="1.5"
                      d="M9.907 10.547H6.093l.573-6.906a.8.8 0 0 1 .797-.734h1.074a.8.8 0 0 1 .797.734l.573 6.906Z"/>
            </svg>
        ),
        account: (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" fill="none">
                <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M10.88 1.952c1.067.555 1.8 1.706 1.8 3.036s-.733 2.482-1.8 3.036m1.44 3.941c1.088.515 2.068 1.354 2.88 2.435m-14.4 0c1.401-1.865 3.304-3.012 5.4-3.012 2.096 0 3.998 1.147 5.4 3.012M9.44 4.988c0 1.872-1.45 3.388-3.24 3.388-1.79 0-3.24-1.516-3.24-3.388C2.96 3.117 4.41 1.6 6.2 1.6c1.79 0 3.24 1.517 3.24 3.388Z"/>
            </svg>)
    }

    return <span className="icon">{icons[props.nameForIcon]}</span>
}