type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      {...props}
      viewBox="0 0 1389 292"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M80.965 71.0984H109.793L151.668 189.988L193.542 71.0984H222.16L168.081 220.5H135.044L80.965 71.0984ZM269.558 223.025C258.476 223.025 248.796 220.64 240.52 215.871C232.243 210.961 225.79 204.087 221.16 195.249C216.671 186.411 214.427 176.1 214.427 164.317C214.427 152.673 216.671 142.432 221.16 133.595C225.79 124.616 232.173 117.743 240.309 112.973C248.586 108.063 258.125 105.608 268.927 105.608C279.588 105.608 288.917 107.993 296.913 112.762C305.05 117.532 311.292 124.476 315.641 133.595C320.13 142.713 322.375 153.445 322.375 165.79V171.892H242.413C242.834 181.571 245.429 188.936 250.199 193.986C255.109 199.037 261.632 201.562 269.769 201.562C275.801 201.562 280.781 200.229 284.709 197.564C288.637 194.898 291.442 191.041 293.126 185.99L320.691 187.674C317.745 198.616 311.713 207.243 302.595 213.556C293.476 219.869 282.464 223.025 269.558 223.025ZM294.388 153.795C293.827 144.957 291.302 138.294 286.813 133.805C282.324 129.176 276.362 126.861 268.927 126.861C261.632 126.861 255.6 129.176 250.83 133.805C246.201 138.434 243.395 145.098 242.413 153.795H294.388ZM335.614 108.133H360.864L361.917 139.276L359.602 138.855C361.285 128.194 364.442 120.408 369.071 115.498C373.7 110.588 380.153 108.133 388.43 108.133H398.741V131.28H388.22C382.328 131.28 377.488 132.122 373.7 133.805C370.053 135.488 367.247 138.154 365.283 141.801C363.46 145.448 362.548 150.078 362.548 155.689V220.5H335.614V108.133ZM455.756 223.025C444.674 223.025 434.994 220.64 426.718 215.871C418.441 210.961 411.988 204.087 407.359 195.249C402.729 186.271 400.414 175.96 400.414 164.317C400.414 152.673 402.729 142.432 407.359 133.595C411.988 124.616 418.441 117.743 426.718 112.973C434.994 108.063 444.674 105.608 455.756 105.608C465.295 105.608 473.783 107.291 481.218 110.658C488.793 114.025 494.895 118.935 499.525 125.388C504.154 131.701 507.03 139.206 508.152 147.903L480.376 149.376C479.254 142.362 476.518 136.961 472.169 133.174C467.821 129.386 462.35 127.492 455.756 127.492C447.059 127.492 440.325 130.719 435.555 137.172C430.786 143.625 428.401 152.673 428.401 164.317C428.401 175.96 430.786 185.008 435.555 191.461C440.325 197.914 447.059 201.141 455.756 201.141C462.49 201.141 468.031 199.247 472.38 195.459C476.729 191.532 479.394 185.64 480.376 177.784L508.152 179.046C507.17 188.024 504.364 195.81 499.735 202.403C495.106 208.997 489.003 214.117 481.428 217.764C473.853 221.272 465.295 223.025 455.756 223.025ZM568.781 223.025C557.698 223.025 548.019 220.64 539.742 215.871C531.465 210.961 525.012 204.087 520.383 195.249C515.894 186.411 513.649 176.1 513.649 164.317C513.649 152.673 515.894 142.432 520.383 133.595C525.012 124.616 531.395 117.743 539.532 112.973C547.808 108.063 557.348 105.608 568.149 105.608C578.811 105.608 588.14 107.993 596.136 112.762C604.272 117.532 610.515 124.476 614.864 133.595C619.353 142.713 621.597 153.445 621.597 165.79V171.892H541.636C542.057 181.571 544.652 188.936 549.422 193.986C554.331 199.037 560.855 201.562 568.991 201.562C575.023 201.562 580.003 200.229 583.931 197.564C587.859 194.898 590.665 191.041 592.348 185.99L619.914 187.674C616.968 198.616 610.936 207.243 601.817 213.556C592.699 219.869 581.687 223.025 568.781 223.025ZM593.611 153.795C593.05 144.957 590.525 138.294 586.036 133.805C581.546 129.176 575.584 126.861 568.149 126.861C560.855 126.861 554.822 129.176 550.053 133.805C545.424 138.434 542.618 145.098 541.636 153.795H593.611ZM635.502 71.0984H662.436V220.5H635.502V71.0984ZM785.622 223.867C773.277 223.867 762.615 221.763 753.637 217.554C744.659 213.205 737.575 207.103 732.384 199.247C727.194 191.391 724.178 182.273 723.336 171.892L751.112 170.208C752.094 176.802 753.988 182.343 756.794 186.832C759.599 191.181 763.387 194.548 768.157 196.932C773.066 199.177 779.028 200.299 786.043 200.299C794.88 200.299 801.684 198.686 806.454 195.459C811.364 192.093 813.819 187.253 813.819 180.94C813.819 176.872 812.837 173.435 810.873 170.629C808.909 167.683 805.332 165.018 800.141 162.633C794.951 160.108 787.375 157.653 777.415 155.268C764.649 152.322 754.619 149.096 747.324 145.589C740.03 141.941 734.699 137.452 731.332 132.122C728.106 126.791 726.492 120.057 726.492 111.921C726.492 103.223 728.597 95.5778 732.805 88.9845C737.154 82.2509 743.397 77.0604 751.533 73.413C759.669 69.6254 769.279 67.7316 780.361 67.7316C791.864 67.7316 801.825 69.8358 810.242 74.0443C818.658 78.2528 825.252 84.0746 830.021 91.5096C834.791 98.9446 837.737 107.572 838.859 117.392L811.294 118.654C810.732 113.183 809.119 108.414 806.454 104.345C803.788 100.137 800.211 96.9105 795.722 94.6659C791.373 92.4214 786.113 91.2992 779.94 91.2992C772.084 91.2992 765.842 93.1228 761.213 96.7702C756.583 100.277 754.268 104.977 754.268 110.869C754.268 114.937 755.25 118.304 757.214 120.969C759.178 123.634 762.475 125.949 767.104 127.913C771.874 129.737 778.818 131.701 787.936 133.805C801.123 136.611 811.644 140.188 819.5 144.537C827.356 148.745 832.967 153.725 836.334 159.477C839.841 165.088 841.595 171.752 841.595 179.467C841.595 188.445 839.28 196.301 834.651 203.035C830.021 209.628 823.428 214.748 814.871 218.396C806.454 222.043 796.704 223.867 785.622 223.867ZM854.327 71.0984H881.262V133.805H877.895C879.578 124.406 883.576 117.392 889.889 112.762C896.202 107.993 903.987 105.608 913.246 105.608C925.451 105.608 934.85 109.536 941.443 117.392C948.036 125.107 951.333 135.418 951.333 148.324V220.5H924.399V154.847C924.399 145.729 922.785 138.925 919.559 134.436C916.473 129.807 911.703 127.492 905.25 127.492C897.675 127.492 891.783 129.947 887.574 134.857C883.366 139.627 881.262 146.501 881.262 155.479V220.5H854.327V71.0984ZM972.288 108.133H999.223V220.5H972.288V108.133ZM971.867 69.2045H999.854V93.193H971.867V69.2045ZM1017.71 108.133H1043.59L1044.22 132.122L1041.49 130.859C1044.15 122.723 1048.71 116.48 1055.17 112.131C1061.62 107.782 1069.12 105.608 1077.68 105.608C1087.92 105.608 1096.62 108.203 1103.77 113.394C1111.07 118.444 1116.47 125.458 1119.98 134.436C1123.62 143.274 1125.45 153.234 1125.45 164.317C1125.45 175.399 1123.62 185.429 1119.98 194.407C1116.47 203.245 1111.07 210.259 1103.77 215.45C1096.62 220.5 1087.85 223.025 1077.47 223.025C1071.86 223.025 1066.6 222.043 1061.69 220.079C1056.92 218.115 1052.78 215.31 1049.27 211.662C1045.91 207.875 1043.52 203.596 1042.12 198.826L1044.64 196.722V252.064H1017.71V108.133ZM1071.16 201.141C1079.29 201.141 1085.68 197.914 1090.31 191.461C1095.08 184.868 1097.46 175.82 1097.46 164.317C1097.46 152.813 1095.08 143.835 1090.31 137.382C1085.68 130.789 1079.29 127.492 1071.16 127.492C1065.69 127.492 1060.92 128.895 1056.85 131.701C1052.92 134.506 1049.91 138.645 1047.8 144.116C1045.7 149.587 1044.64 156.32 1044.64 164.317C1044.64 172.313 1045.7 179.116 1047.8 184.728C1049.91 190.199 1052.92 194.337 1056.85 197.143C1060.78 199.808 1065.55 201.141 1071.16 201.141Z"
        fill="currentColor"
      />
      <rect
        x="1165.62"
        y="74.3355"
        width="143.937"
        height="143.329"
        rx="24.8465"
        stroke="currentColor"
        strokeWidth="6.67093"
      />
      <path
        d="M1192.28 175.832C1192.28 170.989 1192.95 166.786 1194.29 163.223C1195.68 159.605 1197.93 156.32 1201.05 153.37C1204.17 150.42 1208.45 147.525 1213.91 144.686C1216.8 143.127 1219 141.819 1220.51 140.761C1222.07 139.648 1223.18 138.507 1223.85 137.338C1224.57 136.169 1224.93 134.749 1224.93 133.079C1224.93 130.518 1224.1 128.486 1222.43 126.983C1220.76 125.425 1218.39 124.645 1215.33 124.645C1211.99 124.645 1209.32 125.592 1207.31 127.484C1205.31 129.377 1204.08 132.133 1203.64 135.751L1192.45 135.083C1193.01 128.848 1195.26 123.977 1199.21 120.47C1203.22 116.963 1208.59 115.21 1215.33 115.21C1219.62 115.21 1223.32 115.961 1226.43 117.464C1229.61 118.912 1232 120.971 1233.62 123.643C1235.29 126.315 1236.12 129.405 1236.12 132.912C1236.12 135.974 1235.59 138.562 1234.53 140.678C1233.53 142.793 1231.92 144.741 1229.69 146.523C1227.52 148.304 1224.38 150.28 1220.26 152.451C1215.47 155.012 1211.82 157.517 1209.32 159.967C1206.81 162.36 1205.48 164.504 1205.31 166.396H1236.12V175.832H1192.28ZM1265.95 163.975H1236.22V155.124L1264.19 116.546H1276.8V154.539H1283.9V163.975H1276.8V175.832H1265.95V163.975ZM1265.95 154.539V130.657L1248.08 154.539H1265.95Z"
        fill="currentColor"
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  deploy: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="103" height="32" fill="none">
      <rect width="103" height="32" fill="#1A1A1A" rx="6" />
      <rect
        width="102"
        height="31"
        x=".5"
        y=".5"
        stroke="#fff"
        strokeOpacity=".14"
        rx="5.5"
      />
      <g clipPath="url(#a)">
        <path
          fill="#EDEDED"
          fillRule="evenodd"
          d="m16 10.75 6 10.5H10l6-10.5Z"
          clipRule="evenodd"
        />
      </g>
      <path stroke="#fff" strokeOpacity=".14" d="M31.5 1v30" />
      <path
        fill="#EDEDED"
        d="M47.4 11.06c3.1 0 4.85 1.8 4.85 4.98 0 3.18-1.7 4.96-4.77 4.96h-3.26v-9.94h3.18Zm-1.7 8.57h1.7c2.22 0 3.31-1.18 3.31-3.59 0-2.43-1.09-3.6-3.31-3.6h-1.7v7.19Zm7.83-2.34c0-2.37 1.38-3.88 3.51-3.88 1.74 0 3.25 1.15 3.33 3.8l.02.5h-5.34c.12 1.39.82 2.2 2 2.2.73 0 1.4-.42 1.7-1.14l1.53.12a3.3 3.3 0 0 1-3.24 2.28c-2.13 0-3.51-1.51-3.51-3.88Zm1.55-.7h3.77c-.2-1.43-.97-1.92-1.8-1.92-1.1 0-1.79.72-1.97 1.92Zm6.98 6.51v-9.52h1.36l.04 1.08c.4-.8 1.17-1.25 2.25-1.25 2.19 0 3.2 1.8 3.2 3.88 0 2.07-1.01 3.88-3.2 3.88-1.02 0-1.78-.4-2.2-1.18v3.11h-1.45Zm1.31-5.81c0 1.33.6 2.6 2 2.6 1.42 0 2-1.26 2-2.6 0-1.33-.58-2.6-2-2.6-1.4 0-2 1.27-2 2.6Zm7.36-6.23h1.45v8.25c0 .33.16.49.48.49h.62V21h-.93c-.98 0-1.62-.63-1.62-1.62v-8.32Zm7.1 10.1c-2.13 0-3.52-1.5-3.52-3.87s1.39-3.88 3.51-3.88c2.13 0 3.52 1.51 3.52 3.88s-1.39 3.88-3.52 3.88Zm-2-3.87c0 1.62.72 2.6 2 2.6 1.27 0 2-.98 2-2.6s-.73-2.6-2-2.6c-1.28 0-2 .98-2 2.6Zm6.07-3.71h1.49l2.11 5.88 2.05-5.88h1.47l-2.97 8.29c-.31.85-.87 1.23-1.78 1.23h-1v-1.19h.8c.38 0 .6-.14.73-.49l.25-.63h-.46l-2.69-7.21Z"
      />
      <defs>
        <clipPath id="a">
          <path
            fill="#fff"
            d="M0 0h12v12H0z"
            fillOpacity="1"
            transform="translate(10 10)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
}