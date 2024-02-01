import clsx from "clsx";
import {
  Component,
  ComponentProps,
  ParentComponent,
  mergeProps,
} from "solid-js";

type IconProps = {
  size?: number;
} & ComponentProps<"div">;

export const IconBase: ParentComponent<ComponentProps<"div">> = (props) => {
  return <div {...props}>{props.children}</div>;
};

export const ArrowIcon: Component<IconProps> = (props) => {
  props = mergeProps({ size: 30 }, props);
  return (
    <IconBase {...props}>
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 109 109"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M35.5386 59.0418L60.9719 84.4751L54.5 90.8335L18.1667 54.5001L54.5 18.1667L60.9719 24.5251L35.5386 49.9584H90.8334V59.0418H35.5386Z" />
      </svg>
    </IconBase>
  );
};

export const MuteIcon: Component<IconProps> = (props) => {
  props = mergeProps({ size: 30 }, props);
  return (
    <IconBase {...props}>
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 109 109"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M89.925 102.642L76.1865 88.903C74.2941 90.1141 72.2882 91.1549 70.1688 92.0254C68.0493 92.8959 65.8542 93.5961 63.5834 94.126V84.8155C64.6431 84.4371 65.6839 84.0586 66.7057 83.6801C67.7276 83.3016 68.6927 82.8475 69.6011 82.3176L54.5 67.2166V90.8332L31.7917 68.1249H13.625V40.8749H28.1583L6.35834 19.0749L12.7167 12.7166L96.2834 96.2832L89.925 102.642ZM89.0167 76.2999L82.4313 69.7145C83.7181 67.368 84.6832 64.9079 85.3266 62.3343C85.97 59.7607 86.2917 57.1114 86.2917 54.3864C86.2917 47.2711 84.2101 40.9127 80.0469 35.3114C75.8837 29.71 70.3959 25.9252 63.5834 23.9572V14.6468C72.9695 16.7662 80.6146 21.516 86.5188 28.8962C92.4229 36.2765 95.375 44.7732 95.375 54.3864C95.375 58.3982 94.8262 62.2586 93.7287 65.9676C92.6311 69.6766 91.0604 73.1207 89.0167 76.2999ZM73.8021 61.0853L63.5834 50.8666V36.1061C67.141 37.7714 69.9228 40.2693 71.9287 43.5999C73.9346 46.9305 74.9375 50.5638 74.9375 54.4999C74.9375 55.6353 74.8429 56.7518 74.6537 57.8494C74.4644 58.9469 74.1806 60.0256 73.8021 61.0853ZM54.5 41.7832L42.6917 29.9749L54.5 18.1666V41.7832ZM45.4167 68.8062V58.1332L37.2417 49.9582H22.7083V59.0416H35.6521L45.4167 68.8062Z" />
      </svg>
    </IconBase>
  );
};
export const VolumeIcon: Component<IconProps> = (props) => {
  props = mergeProps({ size: 30 }, props);
  return (
    <IconBase {...props}>
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 109 109"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M63.5833 94.1262V84.8158C70.3958 82.8477 75.8837 79.063 80.0469 73.4616C84.2101 67.8602 86.2917 61.5019 86.2917 54.3866C86.2917 47.2713 84.2101 40.913 80.0469 35.3116C75.8837 29.7102 70.3958 25.9254 63.5833 23.9574V14.647C72.9694 16.7664 80.6146 21.5162 86.5188 28.8965C92.4229 36.2767 95.375 44.7734 95.375 54.3866C95.375 63.9998 92.4229 72.4965 86.5188 79.8767C80.6146 87.2569 72.9694 92.0067 63.5833 94.1262ZM13.625 68.1251V40.8751H31.7917L54.5 18.1668V90.8335L31.7917 68.1251H13.625ZM63.5833 72.6668V36.1064C67.141 37.7716 69.9227 40.2696 71.9286 43.6001C73.9346 46.9307 74.9375 50.564 74.9375 54.5001C74.9375 58.3605 73.9346 61.9371 71.9286 65.2298C69.9227 68.5225 67.141 71.0015 63.5833 72.6668ZM45.4167 40.1939L35.6521 49.9584H22.7083V59.0418H35.6521L45.4167 68.8064V40.1939Z" />
      </svg>
    </IconBase>
  );
};
export const StopIcon: Component<IconProps> = (props) => {
  props = mergeProps({ size: 30 }, props);
  return (
    <IconBase {...props}>
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 109 109"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M27.25 81.75V27.25H81.75V81.75H27.25ZM36.3333 72.6667H72.6667V36.3333H36.3333V72.6667Z" />
      </svg>
    </IconBase>
  );
};
export const PauseIcon: Component<IconProps> = (props) => {
  props = mergeProps({ size: 30 }, props);

  return (
    <IconBase {...props}>
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 109 109"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M59.0416 86.2916V22.7083H86.2916V86.2916H59.0416ZM22.7083 86.2916V22.7083H49.9583V86.2916H22.7083ZM68.125 77.2082H77.2083V31.7916H68.125V77.2082ZM31.7916 77.2082H40.875V31.7916H31.7916V77.2082Z" />
      </svg>
    </IconBase>
  );
};
export const PlayIcon: Component<IconProps> = (props) => {
  props = mergeProps({ size: 30 }, props);
  return (
    <IconBase {...props}>
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 109 109"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M36.3333 86.2916V22.7083L86.2917 54.4999L36.3333 86.2916ZM45.4167 69.7145L69.2604 54.4999L45.4167 39.2853V69.7145Z" />
      </svg>
    </IconBase>
  );
};
export const PiPIcon: Component<IconProps> = (props) => {
  props = mergeProps({ size: 30 }, props);
  return (
    <IconBase {...props}>
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 109 109"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.1667 90.8334C15.6688 90.8334 13.5304 89.944 11.7516 88.1652C9.97275 86.3864 9.08334 84.248 9.08334 81.7501V27.2501C9.08334 24.7522 9.97275 22.6138 11.7516 20.835C13.5304 19.0562 15.6688 18.1667 18.1667 18.1667H90.8333C93.3312 18.1667 95.4696 19.0562 97.2484 20.835C99.0272 22.6138 99.9166 24.7522 99.9166 27.2501V81.7501C99.9166 84.248 99.0272 86.3864 97.2484 88.1652C95.4696 89.944 93.3312 90.8334 90.8333 90.8334H18.1667ZM18.1667 81.7501H90.8333V27.2501H18.1667V81.7501ZM49.9583 77.2084H86.2916V49.9584H49.9583V77.2084ZM59.0417 68.1251V59.0418H77.2083V68.1251H59.0417Z" />
      </svg>
    </IconBase>
  );
};
export const MovieIcon: Component<IconProps> = (props) => {
  props = mergeProps({ size: 30 }, props);
  return (
    <IconBase {...props}>
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 109 109"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.1667 18.1667L27.25 36.3334H40.875L31.7917 18.1667H40.875L49.9583 36.3334H63.5833L54.5 18.1667H63.5833L72.6667 36.3334H86.2917L77.2083 18.1667H90.8333C93.3312 18.1667 95.4696 19.0562 97.2484 20.835C99.0273 22.6138 99.9167 24.7522 99.9167 27.2501V81.7501C99.9167 84.248 99.0273 86.3864 97.2484 88.1652C95.4696 89.944 93.3312 90.8334 90.8333 90.8334H18.1667C15.6687 90.8334 13.5304 89.944 11.7516 88.1652C9.97274 86.3864 9.08333 84.248 9.08333 81.7501V27.2501C9.08333 24.7522 9.97274 22.6138 11.7516 20.835C13.5304 19.0562 15.6687 18.1667 18.1667 18.1667ZM18.1667 45.4167V81.7501H90.8333V45.4167H18.1667Z" />
      </svg>
    </IconBase>
  );
};
export const TVIcon: Component<IconProps> = (props) => {
  props = mergeProps({ size: 30 }, props);
  return (
    <IconBase {...props}>
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 109 109"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M36.3333 95.375V86.2917H18.1667C15.6687 86.2917 13.5304 85.4023 11.7516 83.6234C9.97274 81.8446 9.08333 79.7063 9.08333 77.2083V22.7083C9.08333 20.2104 9.97274 18.072 11.7516 16.2932C13.5304 14.5144 15.6687 13.625 18.1667 13.625H90.8333C93.3312 13.625 95.4696 14.5144 97.2484 16.2932C99.0273 18.072 99.9167 20.2104 99.9167 22.7083V77.2083C99.9167 79.7063 99.0273 81.8446 97.2484 83.6234C95.4696 85.4023 93.3312 86.2917 90.8333 86.2917H72.6667V95.375H36.3333ZM18.1667 77.2083H90.8333V22.7083H18.1667V77.2083Z" />
      </svg>
    </IconBase>
  );
};
export const SettingsIcon: Component<IconProps> = (props) => {
  props = mergeProps({ size: 30 }, props);
  return (
    <IconBase {...props}>
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 109 109"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M42.0104 99.9166L40.1938 85.3833C39.2097 85.0048 38.2825 84.5506 37.412 84.0208C36.5415 83.4909 35.6899 82.9232 34.8573 82.3176L21.3458 87.9947L8.85626 66.4218L20.5511 57.5655C20.4754 57.0357 20.4375 56.5247 20.4375 56.0327V52.9671C20.4375 52.4751 20.4754 51.9642 20.5511 51.4343L8.85626 42.578L21.3458 21.0051L34.8573 26.6822C35.6899 26.0767 36.5604 25.5089 37.4688 24.9791C38.3771 24.4492 39.2854 23.9951 40.1938 23.6166L42.0104 9.08325H66.9896L68.8063 23.6166C69.7903 23.9951 70.7175 24.4492 71.588 24.9791C72.4585 25.5089 73.3101 26.0767 74.1427 26.6822L87.6542 21.0051L100.144 42.578L88.449 51.4343C88.5247 51.9642 88.5625 52.4751 88.5625 52.9671V56.0327C88.5625 56.5247 88.4868 57.0357 88.3354 57.5655L100.03 66.4218L87.5406 87.9947L74.1427 82.3176C73.3101 82.9232 72.4396 83.4909 71.5313 84.0208C70.6229 84.5506 69.7146 85.0048 68.8063 85.3833L66.9896 99.9166H42.0104ZM49.9583 90.8333H58.9281L60.5177 78.7978C62.8642 78.1923 65.0405 77.3029 67.0464 76.1296C69.0523 74.9563 70.8879 73.5371 72.5531 71.8718L83.7938 76.527L88.2219 68.8062L78.4573 61.426C78.8358 60.3662 79.1007 59.2497 79.2521 58.0765C79.4035 56.9032 79.4792 55.711 79.4792 54.4999C79.4792 53.2888 79.4035 52.0966 79.2521 50.9234C79.1007 49.7501 78.8358 48.6336 78.4573 47.5739L88.2219 40.1937L83.7938 32.4728L72.5531 37.2416C70.8879 35.5006 69.0523 34.0435 67.0464 32.8702C65.0405 31.697 62.8642 30.8076 60.5177 30.202L59.0417 18.1666H50.0719L48.4823 30.202C46.1358 30.8076 43.9596 31.697 41.9537 32.8702C39.9478 34.0435 38.1122 35.4628 36.4469 37.128L25.2063 32.4728L20.7781 40.1937L30.5427 47.4603C30.1642 48.5958 29.8993 49.7312 29.7479 50.8666C29.5965 52.002 29.5208 53.2131 29.5208 54.4999C29.5208 55.711 29.5965 56.8843 29.7479 58.0197C29.8993 59.1551 30.1642 60.2905 30.5427 61.426L20.7781 68.8062L25.2063 76.527L36.4469 71.7583C38.1122 73.4992 39.9478 74.9563 41.9537 76.1296C43.9596 77.3029 46.1358 78.1923 48.4823 78.7978L49.9583 90.8333ZM54.7271 70.3958C59.1174 70.3958 62.8642 68.844 65.9677 65.7405C69.0712 62.6371 70.6229 58.8902 70.6229 54.4999C70.6229 50.1096 69.0712 46.3628 65.9677 43.2593C62.8642 40.1558 59.1174 38.6041 54.7271 38.6041C50.2611 38.6041 46.4953 40.1558 43.4297 43.2593C40.3641 46.3628 38.8313 50.1096 38.8313 54.4999C38.8313 58.8902 40.3641 62.6371 43.4297 65.7405C46.4953 68.844 50.2611 70.3958 54.7271 70.3958Z" />
      </svg>
    </IconBase>
  );
};
export const SearchIcon: Component<IconProps> = (props) => {
  props = mergeProps({ size: 30 }, props);
  return (
    <IconBase {...props}>
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 109 109"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M89.0167 95.375L60.4042 66.7625C58.1333 68.5792 55.5219 70.0174 52.5698 71.0771C49.6177 72.1368 46.4764 72.6667 43.1458 72.6667C34.8951 72.6667 27.9123 69.8092 22.1974 64.0943C16.4825 58.3793 13.625 51.3965 13.625 43.1458C13.625 34.8951 16.4825 27.9123 22.1974 22.1974C27.9123 16.4825 34.8951 13.625 43.1458 13.625C51.3965 13.625 58.3793 16.4825 64.0943 22.1974C69.8092 27.9123 72.6667 34.8951 72.6667 43.1458C72.6667 46.4764 72.1368 49.6177 71.0771 52.5698C70.0174 55.5219 68.5792 58.1333 66.7625 60.4042L95.375 89.0167L89.0167 95.375ZM43.1458 63.5833C48.8229 63.5833 53.6484 61.5964 57.6224 57.6224C61.5964 53.6484 63.5833 48.8229 63.5833 43.1458C63.5833 37.4688 61.5964 32.6432 57.6224 28.6693C53.6484 24.6953 48.8229 22.7083 43.1458 22.7083C37.4688 22.7083 32.6432 24.6953 28.6693 28.6693C24.6953 32.6432 22.7083 37.4688 22.7083 43.1458C22.7083 48.8229 24.6953 53.6484 28.6693 57.6224C32.6432 61.5964 37.4688 63.5833 43.1458 63.5833Z" />
      </svg>
    </IconBase>
  );
};
export const MenuIcon: Component<IconProps> = (props) => {
  props = mergeProps({ size: 30 }, props);
  return (
    <IconBase {...props}>
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 109 109"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.625 81.75V72.6667H95.375V81.75H13.625ZM13.625 59.0417V49.9583H95.375V59.0417H13.625ZM13.625 36.3333V27.25H95.375V36.3333H13.625Z" />
      </svg>
    </IconBase>
  );
};
export const HomeIcon: Component<IconProps> = (props) => {
  props = mergeProps({ size: 30 }, props);
  return (
    <IconBase {...props}>
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 109 109"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M27.25 86.2917H40.875V59.0417H68.125V86.2917H81.75V45.4167L54.5 24.9792L27.25 45.4167V86.2917ZM18.1667 95.375V40.875L54.5 13.625L90.8334 40.875V95.375H59.0417V68.125H49.9584V95.375H18.1667Z" />
      </svg>
    </IconBase>
  );
};
export const SyncIcon: Component<IconProps> = (props) => {
  props = mergeProps({ size: 30 }, props);
  return (
    <IconBase {...props}>
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 109 109"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.1667 90.8334V81.7501H30.6563L28.8396 80.1605C24.9035 76.6786 22.1406 72.7046 20.5511 68.2386C18.9615 63.7726 18.1667 59.2688 18.1667 54.7272C18.1667 46.3251 20.6835 38.8503 25.7172 32.3027C30.7509 25.7551 37.3174 21.4216 45.4167 19.3022V28.8397C39.9667 30.8077 35.5764 34.1572 32.2459 38.8881C28.9153 43.619 27.25 48.8987 27.25 54.7272C27.25 58.1334 27.8934 61.445 29.1802 64.6621C30.467 67.8791 32.4729 70.8501 35.1979 73.5751L36.3334 74.7105V63.5834H45.4167V90.8334H18.1667ZM63.5834 89.698V80.1605C69.0334 78.1924 73.4236 74.843 76.7542 70.1121C80.0847 65.3812 81.75 60.1015 81.75 54.273C81.75 50.8667 81.1066 47.5551 79.8198 44.3381C78.533 41.1211 76.5271 38.1501 73.8021 35.4251L72.6667 34.2897V45.4167H63.5834V18.1667H90.8334V27.2501H78.3438L80.1604 28.8397C83.8695 32.5487 86.5755 36.5794 88.2787 40.9319C89.9818 45.2843 90.8334 49.7313 90.8334 54.273C90.8334 62.6751 88.3165 70.1499 83.2828 76.6975C78.2491 83.245 71.6827 87.5786 63.5834 89.698Z" />
      </svg>
    </IconBase>
  );
};
export const ExpandIcon: Component<IconProps> = (props) => {
  props = mergeProps({ size: 30 }, props);
  return (
    <IconBase {...props}>
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 109 109"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M54.5 69.8281L27.25 42.5781L33.6083 36.2197L54.5 57.1114L75.3917 36.2197L81.75 42.5781L54.5 69.8281Z"
          fill="white"
        />
      </svg>
    </IconBase>
  );
};
