import React, { FC } from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export const LogoIcon: FC<SvgProps> = (props) => {
  return (
    <Svg width="99" height="30" viewBox="0 0 99 30" fill="none" {...props}>
      <Path
        d="M0 29V8.95703H4.04034V17.8574L12.2029 8.95703H17.6355L10.1008 16.7637L18.045 29H12.8172L7.31629 19.5938L4.04034 22.9434V29H0Z"
        fill="#1877F2"
      />
      <Path
        d="M24.749 18.9102L21.2683 18.2812C21.6596 16.8776 22.333 15.8385 23.2885 15.1641C24.244 14.4896 25.6636 14.1523 27.5472 14.1523C29.258 14.1523 30.532 14.3574 31.3692 14.7676C32.2064 15.1686 32.7933 15.6836 33.13 16.3125C33.4758 16.9323 33.6487 18.0762 33.6487 19.7441L33.6077 24.2285C33.6077 25.5046 33.6669 26.4479 33.7852 27.0586C33.9126 27.6602 34.1446 28.3073 34.4813 29H30.6867C30.5866 28.7448 30.4637 28.3665 30.3181 27.8652C30.2544 27.6374 30.2089 27.487 30.1816 27.4141C29.5265 28.0521 28.8258 28.5306 28.0796 28.8496C27.3334 29.1686 26.5371 29.3281 25.6909 29.3281C24.1985 29.3281 23.0201 28.9225 22.1556 28.1113C21.3002 27.3001 20.8725 26.2747 20.8725 25.0352C20.8725 24.2148 21.0681 23.4857 21.4594 22.8477C21.8507 22.2005 22.3967 21.7083 23.0974 21.3711C23.8072 21.0247 24.8264 20.724 26.155 20.4688C27.9476 20.1315 29.1898 19.8171 29.8813 19.5254V19.1426C29.8813 18.4043 29.6994 17.8802 29.3354 17.5703C28.9714 17.2513 28.2843 17.0918 27.2742 17.0918C26.5917 17.0918 26.0594 17.2285 25.6772 17.502C25.295 17.7663 24.9856 18.2357 24.749 18.9102ZM29.8813 22.0273C29.39 22.1914 28.6119 22.3874 27.5472 22.6152C26.4825 22.8431 25.7864 23.0664 25.4588 23.2852C24.9583 23.6406 24.7081 24.0918 24.7081 24.6387C24.7081 25.1764 24.9083 25.6413 25.3087 26.0332C25.7091 26.4251 26.2187 26.6211 26.8374 26.6211C27.529 26.6211 28.1888 26.3932 28.8167 25.9375C29.2808 25.5911 29.5856 25.1673 29.7312 24.666C29.8313 24.3379 29.8813 23.7135 29.8813 22.793V22.0273Z"
        fill="#1877F2"
      />
      <Path
        d="M64.3042 30H43.3381C42.1465 30 41.0038 29.5259 40.1613 28.682C39.3187 27.8381 38.8454 26.6935 38.8454 25.5V1.5C38.8454 1.10218 39.0031 0.720644 39.284 0.43934C39.5648 0.158035 39.9458 0 40.3429 0H61.309C61.7062 0 62.0871 0.158035 62.368 0.43934C62.6488 0.720644 62.8066 1.10218 62.8066 1.5V19.5H68.7969V25.5C68.7969 26.6935 68.3236 27.8381 67.481 28.682C66.6385 29.5259 65.4957 30 64.3042 30ZM62.8066 22.5V25.5C62.8066 25.8978 62.9644 26.2794 63.2452 26.5607C63.5261 26.842 63.907 27 64.3042 27C64.7014 27 65.0823 26.842 65.3631 26.5607C65.644 26.2794 65.8018 25.8978 65.8018 25.5V22.5H62.8066ZM59.8114 27V3H41.8405V25.5C41.8405 25.8978 41.9983 26.2794 42.2791 26.5607C42.56 26.842 42.9409 27 43.3381 27H59.8114ZM44.8357 7.5H56.8163V10.5H44.8357V7.5ZM44.8357 13.5H56.8163V16.5H44.8357V13.5ZM44.8357 19.5H52.3236V22.5H44.8357V19.5Z"
        fill="#1877F2"
      />
      <Path
        d="M76.665 18.9102L73.1843 18.2812C73.5756 16.8776 74.249 15.8385 75.2045 15.1641C76.16 14.4896 77.5796 14.1523 79.4632 14.1523C81.174 14.1523 82.448 14.3574 83.2852 14.7676C84.1224 15.1686 84.7093 15.6836 85.046 16.3125C85.3918 16.9323 85.5647 18.0762 85.5647 19.7441L85.5238 24.2285C85.5238 25.5046 85.5829 26.4479 85.7012 27.0586C85.8286 27.6602 86.0606 28.3073 86.3973 29H82.6027C82.5026 28.7448 82.3798 28.3665 82.2342 27.8652C82.1705 27.6374 82.125 27.487 82.0977 27.4141C81.4425 28.0521 80.7418 28.5306 79.9956 28.8496C79.2494 29.1686 78.4532 29.3281 77.6069 29.3281C76.1145 29.3281 74.9361 28.9225 74.0716 28.1113C73.2162 27.3001 72.7885 26.2747 72.7885 25.0352C72.7885 24.2148 72.9841 23.4857 73.3754 22.8477C73.7667 22.2005 74.3127 21.7083 75.0134 21.3711C75.7232 21.0247 76.7424 20.724 78.071 20.4688C79.8636 20.1315 81.1058 19.8171 81.7974 19.5254V19.1426C81.7974 18.4043 81.6154 17.8802 81.2514 17.5703C80.8874 17.2513 80.2003 17.0918 79.1903 17.0918C78.5078 17.0918 77.9754 17.2285 77.5932 17.502C77.211 17.7663 76.9016 18.2357 76.665 18.9102ZM81.7974 22.0273C81.306 22.1914 80.5279 22.3874 79.4632 22.6152C78.3986 22.8431 77.7024 23.0664 77.3748 23.2852C76.8743 23.6406 76.6241 24.0918 76.6241 24.6387C76.6241 25.1764 76.8243 25.6413 77.2247 26.0332C77.6251 26.4251 78.1347 26.6211 78.7535 26.6211C79.445 26.6211 80.1048 26.3932 80.7327 25.9375C81.1968 25.5911 81.5016 25.1673 81.6472 24.666C81.7473 24.3379 81.7974 23.7135 81.7974 22.793V22.0273Z"
        fill="#1877F2"
      />
      <Path
        d="M93.4445 29H89.6089V14.4805H93.1715V16.5449C93.7812 15.5697 94.3272 14.9271 94.8095 14.6172C95.3009 14.3073 95.856 14.1523 96.4748 14.1523C97.3484 14.1523 98.1901 14.3939 99 14.877L97.8125 18.2266C97.1664 17.8073 96.5658 17.5977 96.0107 17.5977C95.4738 17.5977 95.0188 17.748 94.6457 18.0488C94.2726 18.3405 93.9769 18.8737 93.7585 19.6484C93.5492 20.4232 93.4445 22.0456 93.4445 24.5156V29Z"
        fill="#1877F2"
      />
    </Svg>
  )
}
