import { chooseStyle, Context } from '../context';

interface PrimaryButtonColors {
  rest: {
    background: string;
    text: string;
    border: string;
  };
  hover: {
    background: string;
    text: string;
    border: string;
  };
  down: {
    background: string;
    text: string;
    border: string;
  };
  disabled: {
    background: string;
    text: string;
    border: string;
  };
  focus: {
    background: string;
    text: string;
    outline: string;
    border: string;
  };
}

function base(context: Context, colors: PrimaryButtonColors) {
  const names = {
    button: 'button-primary',
  };
  const { css, rem } = context;

  return css(names.button, {
    height: rem(3.2),
    minWidth: rem(9.6),
    border: rem(0.2) + ' solid',
    borderRadius: rem(0.3),
    padding: rem(0.4),
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    font: 'inherit',
    background: colors.rest.background,
    color: colors.rest.text,
    borderColor: colors.rest.border,
  }, {
    $nest: {
      '&:hover:enabled': {
        background: colors.hover.background,
        color: colors.hover.text,
        borderColor: colors.hover.border,
      },
      '&:active:hover:enabled': {
        background: colors.down.background,
        color: colors.down.text,
        borderColor: colors.down.border,
      },
      '&:active:enabled': {
        background: colors.down.background,
        color: colors.down.text,
        borderColor: colors.down.border,
      },
      '&:focus:enabled': {
        outline: `${rem(0.2)} solid ${colors.focus.outline}`,
        outlineOffset: `${rem(-0.4)}`,
        color: colors.focus.text,
        borderColor: colors.focus.border,
        background: colors.focus.background,
      },
      '&:disabled': {
        background: colors.disabled.background,
        color: colors.disabled.text,
        borderColor: colors.disabled.border,
        cursor: 'default',
      },
    },
  });
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.light.brand00,
      text: colors.light.white,
      border: colors.transparent,
    },
    hover: {
      background: colors.light.brand04,
      text: colors.light.white,
      border: colors.transparent,
    },
    down: {
      background: colors.light.brand06,
      text: colors.light.white,
      border: colors.transparent,
    },
    disabled: {
      background: colors.light.gray12,
      text: colors.light.gray06,
      border: colors.transparent,
    },
    focus: {
      background: colors.light.brand04,
      text: colors.light.white,
      outline: colors.light.white,
      border: colors.transparent,
    },
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.dark.brand00,
      text: colors.dark.black,
      border: colors.transparent,
    },
    hover: {
      background: colors.dark.brand04,
      text: colors.dark.black,
      border: colors.transparent,
    },
    down: {
      background: colors.dark.brand06,
      text: colors.dark.black,
      border: colors.transparent,
    },
    disabled: {
      background: colors.dark.gray12,
      text: colors.dark.gray06,
      border: colors.transparent,
    },
    focus: {
      background: colors.dark.brand00,
      text: colors.dark.black,
      outline: colors.dark.black,
      border: colors.transparent,
    },
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.highContrast.white,
      text: colors.highContrast.black,
      border: colors.transparent,
    },
    hover: {
      background: colors.highContrast.yellow,
      text: colors.highContrast.black,
      border: colors.transparent,
    },
    down: {
      background: colors.highContrast.yellow,
      text: colors.highContrast.black,
      border: colors.transparent,
    },
    disabled: {
      background: colors.highContrast.green,
      text: colors.highContrast.black,
      border: colors.transparent,
    },
    focus: {
      background: colors.highContrast.yellow,
      text: colors.highContrast.black,
      outline: colors.transparent,
      border: colors.transparent,
    },
  });
}

export function primaryButton(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
