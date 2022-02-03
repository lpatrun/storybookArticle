import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const CMlogo = (props: SvgProps) => (
  <Svg width={147} height={42} viewBox="0 0 1180 334" fill="none" {...props}>
    <Path
      d="M483.938 152.431c-15.87 0-26.938 11.12-26.938 27.285C457 195.88 468.068 207 483.938 207c6.369 0 12.321-1.853 17.75-5.869l-2.714-10.502c-4.699 3.089-9.084 4.942-13.783 4.942-8.666 0-14.513-6.28-14.513-15.855 0-9.576 5.847-15.856 14.513-15.856 4.699 0 9.084 1.853 13.783 4.942l2.714-10.502c-5.429-4.016-11.381-5.869-17.75-5.869ZM534.336 207c16.497 0 27.564-10.811 27.564-27.284 0-16.474-11.067-27.285-27.564-27.285-16.602 0-27.669 10.811-27.669 27.285 0 16.473 11.067 27.284 27.669 27.284Zm0-11.429c-8.667 0-13.992-6.795-13.992-15.855 0-9.164 5.325-15.856 13.992-15.856 8.561 0 13.991 6.692 13.991 15.856 0 9.06-5.43 15.855-13.991 15.855ZM572.534 205.456h13.26V129.78h-13.26v75.676ZM600.472 205.456h13.261V129.78h-13.261v75.676ZM621.981 179.716c0 16.885 10.65 27.284 27.669 27.284 7.518 0 15.558-2.574 20.569-6.281l-2.61-10.399c-5.012 3.089-11.59 5.251-16.601 5.251-7.205 0-13.156-3.809-14.618-11.119h33.621c.208-1.545.313-3.192.313-4.942.209-15.444-9.188-27.079-23.91-27.079-14.514 0-24.433 11.12-24.433 27.285Zm13.783-3.501c.626-7.928 4.698-12.355 10.65-12.355 6.473 0 9.605 5.251 10.023 12.355h-20.673ZM703.876 152.431c-15.871 0-26.938 11.12-26.938 27.285 0 16.164 11.067 27.284 26.938 27.284 6.369 0 12.32-1.853 17.75-5.869l-2.715-10.502c-4.698 3.089-9.084 4.942-13.782 4.942-8.666 0-14.513-6.28-14.513-15.855 0-9.576 5.847-15.856 14.513-15.856 4.698 0 9.084 1.853 13.782 4.942l2.715-10.502c-5.43-4.016-11.381-5.869-17.75-5.869ZM746.627 166.846h14.722v-12.87h-14.722v-15.65h-8.562l-3.028 15.547-9.084 6.177v6.796h7.413v17.915c0 14.002 7.309 22.239 19.734 22.239 3.655 0 6.265-.927 9.606-2.265l-1.879-12.664c-2.088.823-8.98 1.956-11.068 1.338-3.132-1.338-3.132-8.134-3.132-9.266v-17.297ZM774.47 135.855c0 5.353 3.028 8.957 8.04 8.957 4.908 0 8.04-3.604 8.04-8.957 0-5.148-3.132-8.855-8.04-8.855-5.012 0-8.04 3.707-8.04 8.855Zm-5.011 69.601h27.46v-13.282h-7.1v-30.682c0-4.325-1.149-7.619-5.012-7.516h-14.409v12.87h6.161v25.328h-7.1v13.282ZM800.963 153.976l19.211 51.48h17.228l19.108-51.48h-14.2l-13.574 40.566-13.469-40.566h-14.304ZM857.927 179.716c0 16.885 10.65 27.284 27.669 27.284 7.518 0 15.558-2.574 20.57-6.281l-2.611-10.399c-5.012 3.089-11.589 5.251-16.601 5.251-7.205 0-13.156-3.809-14.618-11.119h33.621c.209-1.545.313-3.192.313-4.942.209-15.444-9.188-27.079-23.91-27.079-14.514 0-24.433 11.12-24.433 27.285Zm13.783-3.501c.626-7.928 4.698-12.355 10.65-12.355 6.473 0 9.606 5.251 10.023 12.355H871.71ZM914.059 160.462c0 4.736 3.237 7.928 7.831 7.928s7.831-3.192 7.831-7.928c0-4.839-3.237-8.031-7.831-8.031s-7.831 3.192-7.831 8.031Zm0 38.507c0 4.839 3.237 8.031 7.831 8.031s7.831-3.192 7.831-8.031-3.237-7.928-7.831-7.928-7.831 3.089-7.831 7.928ZM941.843 153.976v51.48h13.26v-26.255c0-8.237 3.654-15.341 9.919-15.341 4.907 0 8.353 4.221 8.353 11.84v29.756h13.26v-25.74c0-8.752 4.072-15.856 10.546-15.856 4.489 0 7.619 3.603 7.619 11.84v29.756h13.26v-32.33c0-12.973-6.26-20.695-16.18-20.695-8.354 0-13.157 5.457-16.289 12.973-2.088-8.134-7.831-12.973-15.348-12.973-7.623 0-12.739 4.839-15.14 12.046v-10.501h-13.26ZM1033.05 135.855c0 5.353 3.03 8.957 8.04 8.957 4.91 0 8.04-3.604 8.04-8.957 0-5.148-3.13-8.855-8.04-8.855-5.01 0-8.04 3.707-8.04 8.855Zm-5.01 69.601h27.46v-13.282h-7.1v-30.682c0-4.325-1.15-7.619-5.01-7.516h-14.41v12.87h6.16v25.328h-7.1v13.282ZM1094 163.86c6.06 0 9.19 4.015 9.19 11.84v29.756h13.26v-32.33c0-12.973-6.58-20.695-17.44-20.695-8.04 0-15.03 4.427-19 11.223v-9.678h-13.26v51.48h13.26v-25.74c0-8.958 6.06-15.856 13.99-15.856ZM1124.77 179.716c0 16.37 10.12 27.284 22.97 27.284 7.83 0 14.82-4.324 19-11.12v9.576H1180V129.78h-13.26v33.771c-4.18-6.898-11.17-11.12-19-11.12-12.85 0-22.97 10.914-22.97 27.285Zm13.67 0c0-9.164 5.54-15.856 14-15.856 8.56 0 14.3 6.898 14.3 15.856 0 8.957-5.74 15.855-14.3 15.855-8.46 0-14-6.795-14-15.855ZM225.09 192.266c0 3.159-.838 6.26-2.428 8.984a17.686 17.686 0 0 1-6.618 6.508 17.54 17.54 0 0 1-17.854-.412 17.687 17.687 0 0 1-6.315-6.805 17.82 17.82 0 0 1 .82-17.948 17.654 17.654 0 0 1 6.909-6.194c.378-.203.768-.382 1.168-.537V75.294a12.108 12.108 0 0 1-1.168-.52 17.682 17.682 0 0 1-8.112-8.333 17.835 17.835 0 0 1-1.212-11.599 17.746 17.746 0 0 1 6.212-9.847 17.559 17.559 0 0 1 10.948-3.835c3.975 0 7.833 1.352 10.948 3.835a17.74 17.74 0 0 1 6.211 9.847c.908 3.893.481 7.98-1.212 11.599a17.68 17.68 0 0 1-8.111 8.332c-.367.185-.743.353-1.127.504v100.576c.384.152.76.328 1.127.513a17.623 17.623 0 0 1 7.169 6.537 17.776 17.776 0 0 1 2.645 9.363Z"
      fill="#1E1E1E"
    />
    <Path
      d="M299 192.817a17.685 17.685 0 0 1-5.214 12.524 17.856 17.856 0 0 1-15.319 4.986l-54.66 58.579c.416.891.751 1.816 1.002 2.766.416 1.502.623 3.053.615 4.61a17.663 17.663 0 0 1-3.459 10.493 17.805 17.805 0 0 1-9.031 6.417 17.885 17.885 0 0 1-11.096-.152 17.8 17.8 0 0 1-8.85-6.662 17.656 17.656 0 0 1-3.167-10.584 17.668 17.668 0 0 1 3.747-10.395 17.816 17.816 0 0 1 9.205-6.168 17.884 17.884 0 0 1 11.087.456l52.933-56.493a17.608 17.608 0 0 1-2.912-14.447 17.662 17.662 0 0 1 3.272-6.802 17.752 17.752 0 0 1 5.822-4.826l-12.633-57.222a17.776 17.776 0 0 1-10.183-5.722 17.631 17.631 0 0 1-4.398-10.784c-.2-3.985.961-7.921 3.295-11.166a17.754 17.754 0 0 1 9.558-6.705 17.834 17.834 0 0 1 11.675.666 17.728 17.728 0 0 1 8.727 7.747 17.6 17.6 0 0 1 1.992 11.468 17.65 17.65 0 0 1-5.607 10.213c-.556.495-1.141.957-1.752 1.383l13.012 58.956c.853.266 1.681.602 2.477 1.006a17.718 17.718 0 0 1 7.206 6.528 17.596 17.596 0 0 1 2.656 9.33ZM101.355 125.276a20.6 20.6 0 0 1 4.33 10.653 20.52 20.52 0 0 1-2.07 11.296 20.82 20.82 0 0 1-7.834 8.476 21.18 21.18 0 0 1-11.198 3.058 21.162 21.162 0 0 1-11.127-3.299 20.805 20.805 0 0 1-7.646-8.643 20.515 20.515 0 0 1-1.82-11.338 20.613 20.613 0 0 1 4.565-10.557c.426-.446.852-.901 1.244-1.372a36.217 36.217 0 0 0 8.784-23.429 36.208 36.208 0 0 0-8.537-23.518 28.09 28.09 0 0 0-1.653-1.836.074.074 0 0 1 0-.042 20.59 20.59 0 0 1-4.394-10.65 20.51 20.51 0 0 1 2.03-11.326 20.815 20.815 0 0 1 7.828-8.512 21.162 21.162 0 0 1 11.216-3.076 21.154 21.154 0 0 1 11.148 3.307 20.8 20.8 0 0 1 7.646 8.671 20.5 20.5 0 0 1 1.79 11.365c-.5 3.88-2.101 7.54-4.617 10.558a36.062 36.062 0 0 0-10.029 24.562 36.047 36.047 0 0 0 8.375 23.446 18.617 18.617 0 0 0 1.969 2.206ZM102.169 260.466a20.598 20.598 0 0 1 4.36 10.658 20.526 20.526 0 0 1-2.054 11.315 20.837 20.837 0 0 1-7.838 8.495 21.177 21.177 0 0 1-11.212 3.065 21.166 21.166 0 0 1-11.141-3.308 20.815 20.815 0 0 1-7.646-8.664 20.523 20.523 0 0 1-1.802-11.358 20.617 20.617 0 0 1 4.597-10.56c.428-.44.84-.896 1.242-1.369a36.175 36.175 0 0 0 8.767-23.397 36.171 36.171 0 0 0-8.523-23.486 26.698 26.698 0 0 0-1.68-1.833 20.604 20.604 0 0 1-4.421-10.659 20.523 20.523 0 0 1 2.016-11.346 20.827 20.827 0 0 1 7.832-8.532 21.168 21.168 0 0 1 11.231-3.086 21.165 21.165 0 0 1 11.165 3.313 20.818 20.818 0 0 1 7.652 8.69 20.52 20.52 0 0 1 1.779 11.385 20.606 20.606 0 0 1-4.643 10.567 36.006 36.006 0 0 0-10.02 24.535 35.992 35.992 0 0 0 8.367 23.41 37.327 37.327 0 0 0 1.972 2.165ZM37.576 219.007a20.905 20.905 0 0 1 2.286 22.053 21.006 21.006 0 0 1-7.739 8.574 21.12 21.12 0 0 1-11.119 3.206 21.13 21.13 0 0 1-11.116-3.209 21.008 21.008 0 0 1-7.735-8.575 20.903 20.903 0 0 1 2.287-22.049 35.17 35.17 0 0 0 1.98-2.19 36.43 36.43 0 0 0 8.341-21.163v-61.087a36.422 36.422 0 0 0-8.821-21.725c-.38-.437-.775-.839-1.18-1.301a20.902 20.902 0 0 1-2.747-22.233 21.005 21.005 0 0 1 7.74-8.748 21.125 21.125 0 0 1 11.234-3.28 21.125 21.125 0 0 1 11.234 3.28 21.006 21.006 0 0 1 7.74 8.748 20.904 20.904 0 0 1-2.747 22.233c-.404.428-.8.839-1.18 1.301a36.422 36.422 0 0 0-8.82 21.725v61.087a36.43 36.43 0 0 0 8.34 21.163c.666.755 1.323 1.493 2.022 2.19ZM165.458 318.218a17.826 17.826 0 0 1-2.337 8.867 17.695 17.695 0 0 1-6.429 6.508A17.568 17.568 0 0 1 147.89 336a17.566 17.566 0 0 1-8.82-2.337 17.691 17.691 0 0 1-6.48-6.456 17.815 17.815 0 0 1-2.407-8.848 17.812 17.812 0 0 1 2.31-8.875 17.686 17.686 0 0 1 6.408-6.528 18.09 18.09 0 0 1 1.746-.899V33.939a17.93 17.93 0 0 1-1.746-.898 17.702 17.702 0 0 1-6.607-6.919 17.837 17.837 0 0 1 1.022-18.442 17.667 17.667 0 0 1 7.331-6.137 17.531 17.531 0 0 1 16.775 1.308 17.678 17.678 0 0 1 5.896 6.408 17.805 17.805 0 0 1 2.14 8.461c-.007 3.2-.87 6.338-2.5 9.086a17.754 17.754 0 0 1-6.762 6.528c-.375.202-.76.395-1.152.563V302.05c.392.168.777.361 1.152.563a17.689 17.689 0 0 1 6.768 6.52 17.831 17.831 0 0 1 2.494 9.086Z"
      fill="#1E1E1E"
    />
  </Svg>
);

export default CMlogo;
