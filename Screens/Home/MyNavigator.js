import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Footer from '../Widgets/Footer';
import {Svg, Path} from 'react-native-svg';

const MyNavigator = ({color}) => {
  return (
    // <Footer style={{paddingHorizontal: 60, paddingVertical: 25}}>
    // <Pressable>
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.147 19.936c1.762 0 3.196 1.358 3.196 3.026v4.291c0 .359.301.646.688.654h2.789c2.198 0 3.985-1.682 3.985-3.75v-12.17c-.01-.71-.366-1.38-.976-1.825L17.18 2.827a3.672 3.672 0 00-4.406.002l-9.582 7.33c-.634.459-.99 1.128-.997 1.852v12.147c0 2.067 1.787 3.75 3.985 3.75h2.816c.396 0 .718-.3.718-.669 0-.08.01-.162.028-.238v-4.039c0-1.659 1.425-3.014 3.174-3.026h4.23zM23.82 30h-2.816c-1.612-.036-2.856-1.243-2.856-2.747v-4.29c0-.516-.45-.934-1.001-.934h-4.224c-.54.003-.986.423-.986.933v4.277a.97.97 0 01-.045.3C11.734 28.92 10.496 30 8.996 30H6.18C2.772 30 0 27.379 0 24.158V12.002c.015-1.387.685-2.656 1.842-3.492l9.564-7.317a5.945 5.945 0 017.141-.003l9.633 7.324c1.13.822 1.801 2.088 1.82 3.458v12.186C30 27.378 27.228 30 23.82 30z"
        fill={color}
      />
    </Svg>
    // </Pressable>
    // </Footer>
  );
};

const MyNavigator2 = ({color}) => {
  return (
    // <Pressable>
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.816 18.878h.178l.396.001c3.363.018 11.241.327 11.241 5.578 0 4.868-6.47 5.518-11.503 5.543h-.887C7.878 29.982 0 29.673 0 24.423c0-4.97 6.742-5.545 11.816-5.545zm0 2.273c-6.347 0-9.566 1.102-9.566 3.272 0 2.192 3.219 3.304 9.566 3.304 6.346 0 9.565-1.101 9.565-3.27 0-2.195-3.219-3.306-9.566-3.306zm13.99-12.18c.621 0 1.125.508 1.125 1.136v1.9l1.944.002c.621 0 1.125.51 1.125 1.137s-.504 1.136-1.125 1.136h-1.944v1.904c0 .627-.504 1.137-1.125 1.137-.62 0-1.125-.51-1.125-1.137V14.28l-1.941.001c-.621 0-1.125-.509-1.125-1.136 0-.628.504-1.137 1.125-1.137l1.941-.001v-1.901c0-.628.504-1.137 1.125-1.137zM11.816 0c4.399 0 7.976 3.616 7.976 8.06 0 4.444-3.577 8.06-7.977 8.06h-.046a7.865 7.865 0 01-5.619-2.374 8.028 8.028 0 01-2.31-5.69C3.84 3.615 7.418 0 11.816 0zm0 2.273C8.659 2.273 6.09 4.87 6.09 8.06a5.756 5.756 0 001.655 4.084 5.649 5.649 0 004.029 1.702l.042 1.123v-1.123c3.157 0 5.726-2.596 5.726-5.786 0-3.19-2.569-5.787-5.727-5.787z"
        fill={color}
      />
    </Svg>
    // </Pressable>
  );
};

const MyNavigator3 = ({color}) => {
  return (
    // <Pressable>
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.972 0c1.114 0 2.197.426 2.973 1.165.774.745 1.202 1.765 1.17 2.8.003.234.085.503.235.739.247.39.637.666 1.1.779.465.107.95.05 1.362-.178 1.991-1.059 4.525-.424 5.662 1.414l.97 1.562c.024.042.046.083.065.125 1.03 1.811.342 4.091-1.571 5.132-.279.15-.504.358-.66.61-.24.39-.308.853-.186 1.278.124.435.421.795.84 1.018.944.506 1.649 1.357 1.93 2.34a3.638 3.638 0 01-.421 2.926l-1.033 1.601c-1.138 1.819-3.672 2.448-5.643 1.389a1.957 1.957 0 00-.868-.225h-.009c-.45 0-.912.178-1.248.49-.34.317-.527.74-.524 1.188-.01 2.127-1.87 3.847-4.144 3.847h-1.95c-2.284 0-4.143-1.729-4.143-3.855a1.478 1.478 0 00-.235-.77 1.789 1.789 0 00-1.095-.794 1.916 1.916 0 00-1.357.17 4.489 4.489 0 01-3.178.354c-1.05-.277-1.957-.948-2.489-1.839l-.972-1.559c-1.137-1.836-.46-4.189 1.509-5.248.558-.3.905-.859.905-1.458 0-.6-.347-1.16-.905-1.46C.09 12.476-.584 10.117.552 8.281L1.605 6.67C2.727 4.854 5.263 4.215 7.24 5.271c.27.15.562.225.859.228.97 0 1.78-.744 1.795-1.66-.006-1.009.422-1.977 1.201-2.708A4.268 4.268 0 0114.023 0h1.949zm0 2.172h-1.95c-.481 0-.933.175-1.273.49-.34.318-.524.739-.521 1.188-.033 2.116-1.892 3.82-4.143 3.82a4.241 4.241 0 01-2.02-.524c-.849-.448-1.956-.172-2.452.632L2.559 9.389c-.482.779-.186 1.808.673 2.273 1.274.686 2.068 1.966 2.068 3.339 0 1.372-.794 2.65-2.072 3.338-.854.46-1.15 1.484-.655 2.28l.982 1.576c.243.407.64.7 1.098.82.458.12.962.069 1.382-.148a4.319 4.319 0 012.058-.513c.356 0 .712.042 1.06.129 1.052.264 1.965.918 2.507 1.797.351.551.546 1.196.552 1.853 0 .941.812 1.695 1.81 1.695h1.95c.994 0 1.806-.75 1.81-1.675-.006-1.022.424-1.993 1.21-2.725a4.227 4.227 0 012.94-1.125 4.48 4.48 0 011.994.513c.866.462 1.972.187 2.473-.61l1.033-1.602c.23-.37.297-.833.175-1.26a1.69 1.69 0 00-.837-1.016c-.962-.516-1.648-1.347-1.933-2.343a3.633 3.633 0 01.422-2.923 3.977 3.977 0 011.51-1.403c.844-.459 1.14-1.485.65-2.284a.783.783 0 01-.055-.1l-.912-1.471c-.496-.804-1.6-1.08-2.467-.621a4.334 4.334 0 01-3.12.4c-1.07-.257-1.965-.887-2.524-1.776a3.508 3.508 0 01-.558-1.862 1.662 1.662 0 00-.512-1.265 1.886 1.886 0 00-1.299-.508zm-.968 7.925c2.905 0 5.268 2.2 5.268 4.904 0 2.703-2.363 4.9-5.268 4.9-2.904 0-5.267-2.197-5.267-4.9 0-2.703 2.363-4.904 5.267-4.904zm0 2.172c-1.618 0-2.934 1.226-2.934 2.732 0 1.506 1.316 2.729 2.934 2.729s2.934-1.223 2.934-2.73c0-1.505-1.316-2.731-2.934-2.731z"
        fill={color}
      />
    </Svg>
    // </Pressable>
  );
};

export {MyNavigator, MyNavigator2, MyNavigator3};
