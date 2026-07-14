/* @ds-bundle: {"format":4,"namespace":"JimmySTapasBarDesignSystem_b07675","components":[{"name":"DishCard","sourcePath":"components/cards/DishCard.jsx"},{"name":"PromoCard","sourcePath":"components/cards/PromoCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/cards/DishCard.jsx":"73e1a4184965","components/cards/PromoCard.jsx":"0de187af0455","components/core/Badge.jsx":"3cb3cc9d79b2","components/core/Button.jsx":"ee569ed12610","components/core/Divider.jsx":"dcaa5938ea2e","components/core/SectionHeading.jsx":"b4f5df7c6da0","components/forms/Input.jsx":"168fc0f5a373","components/forms/Select.jsx":"33ed4db34ff1","components/navigation/Footer.jsx":"63b5dab67d11","components/navigation/NavBar.jsx":"c76852f63d11","ui_kits/website/App.jsx":"8dd986e13824","ui_kits/website/BarSection.jsx":"70b2411490d6","ui_kits/website/Hero.jsx":"01920b044160","ui_kits/website/MenuSection.jsx":"6c41ec71b223","ui_kits/website/ReservationSection.jsx":"6daf82ef7c19"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JimmySTapasBarDesignSystem_b07675 = window.JimmySTapasBarDesignSystem_b07675 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/PromoCard.jsx
try { (() => {
/**
 * PromoCard — full-bleed photo tile with a bottom scrim and headline,
 * used for feature/event promos (echoes the two-drink promo layouts in
 * uploads/style1.png and style2.png).
 */
function PromoCard({
  image,
  eyebrow,
  title,
  description,
  cta,
  href,
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    style: {
      position: 'relative',
      display: 'block',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      textDecoration: 'none',
      aspectRatio: '3 / 4',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-card)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-display-sm)',
      color: 'var(--cream-100)',
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--cream-300)',
      margin: 0
    }
  }, description), cta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-button)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginTop: 'var(--space-2)'
    }
  }, cta, " \u2192")));
}
Object.assign(__ds_scope, { PromoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PromoCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const toneStyle = {
  gold: {
    color: 'var(--gold-300)',
    borderColor: 'var(--gold-600)',
    background: 'rgba(201,162,75,0.1)'
  },
  sage: {
    color: 'var(--sage-400)',
    borderColor: 'var(--sage-700)',
    background: 'rgba(127,150,96,0.12)'
  },
  berry: {
    color: 'var(--berry-400)',
    borderColor: 'var(--berry-700)',
    background: 'rgba(178,63,77,0.12)'
  },
  neutral: {
    color: 'var(--text-on-dark-secondary)',
    borderColor: 'var(--border-on-dark-strong)',
    background: 'transparent'
  }
};

/**
 * Badge — small pill label for dish tags ("Vegetarisch", "Scharf"),
 * menu recommendations, or event categories.
 */
function Badge({
  tone = 'neutral',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0.3em 0.85em',
      borderRadius: 'var(--radius-pill)',
      border: 'var(--border-width-hairline) solid',
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      ...toneStyle[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/cards/DishCard.jsx
try { (() => {
/**
 * DishCard — a single menu item: photo, name, short description, price,
 * optional dietary/recommendation tags.
 */
function DishCard({
  image,
  name,
  description,
  price,
  tags = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-3)',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-serif-lg)',
      color: 'var(--text-on-dark-primary)',
      margin: 0
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-serif-md)',
      color: 'var(--gold-400)',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, price)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-on-dark-secondary)',
      margin: 0
    }
  }, description), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: i,
    tone: t.tone || 'neutral'
  }, t.label || t))));
}
Object.assign(__ds_scope, { DishCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/DishCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5em',
  fontFamily: 'var(--font-sans)',
  font: 'var(--text-button)',
  letterSpacing: 'var(--tracking-wider)',
  textTransform: 'uppercase',
  textDecoration: 'none',
  cursor: 'pointer',
  border: 'var(--border-width-hairline) solid transparent',
  borderRadius: 'var(--radius-sm)',
  transition: `all var(--duration-fast) var(--ease-standard)`,
  whiteSpace: 'nowrap'
};
const sizes = {
  md: {
    padding: '0.95em 1.8em'
  },
  lg: {
    padding: '1.15em 2.4em',
    letterSpacing: 'var(--tracking-wider)'
  }
};
function variantStyle(variant) {
  switch (variant) {
    case 'primary':
      return {
        background: 'var(--action-primary)',
        color: 'var(--action-primary-text)',
        borderColor: 'var(--action-primary)'
      };
    case 'secondary':
      return {
        background: 'transparent',
        color: 'var(--action-secondary-text)',
        borderColor: 'var(--action-secondary-border)'
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: 'var(--action-ghost-text)',
        borderColor: 'transparent',
        letterSpacing: 'var(--tracking-wide)'
      };
    default:
      return {};
  }
}

/**
 * Button — the brand's single call-to-action primitive. Solid gold for the
 * one primary action per view (Reserve a table), hairline-gold outline for
 * secondary actions, plain-text ghost for tertiary/nav-adjacent actions.
 */
function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const Tag = as === 'a' || href ? 'a' : 'button';
  const combined = {
    ...base,
    ...sizes[size],
    ...variantStyle(variant),
    opacity: disabled ? 0.45 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    ...style
  };
  const hoverBg = {
    primary: 'var(--action-primary-hover)',
    secondary: 'rgba(201, 162, 75, 0.1)',
    ghost: 'rgba(243, 236, 220, 0.08)'
  }[variant];
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    style: combined,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = hoverBg;
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = combined.background;
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
/**
 * Divider — ornamental center-mark rule used above headlines in Jimmy's
 * marketing photography (a hairline with a small centered diamond).
 * Pure CSS, no image asset.
 */
function Divider({
  tone = 'gold',
  width = 96,
  style
}) {
  const color = tone === 'gold' ? 'var(--gold-500)' : tone === 'cream' ? 'var(--cream-300)' : 'var(--border-on-dark-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.6em',
      width,
      maxWidth: '100%',
      margin: '0 auto',
      ...style
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: color,
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      transform: 'rotate(45deg)',
      background: color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: color,
      opacity: 0.6
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/**
 * SectionHeading — the recurring "eyebrow + display headline + optional
 * script accent" pattern seen throughout Jimmy's marketing photography
 * (e.g. "GENIESSEN · ENTSPANNEN · WOHLFÜHLEN" / "Für Dich gemacht").
 */
function SectionHeading({
  eyebrow,
  title,
  script,
  align = 'center',
  on = 'dark',
  style
}) {
  const color = on === 'dark' ? 'var(--text-on-dark-primary)' : 'var(--text-on-light-primary)';
  const eyebrowColor = on === 'dark' ? 'var(--gold-300)' : 'var(--gold-600)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: eyebrowColor,
      marginBottom: 'var(--space-4)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-display-lg)',
      color,
      margin: 0
    }
  }, title), script && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-script-lg)',
      color: 'var(--gold-400)',
      marginTop: 'var(--space-2)'
    }
  }, script));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const base = {
  width: '100%',
  boxSizing: 'border-box',
  font: 'var(--text-body)',
  color: 'var(--text-on-dark-primary)',
  background: 'var(--ink-800)',
  border: 'var(--border-width-hairline) solid var(--border-on-dark)',
  borderRadius: 'var(--radius-sm)',
  padding: '0.9em 1em',
  outline: 'none',
  transition: `border-color var(--duration-fast) var(--ease-standard)`
};

/**
 * Input — text/date/time field styled for dark reservation forms and
 * newsletter signups.
 */
function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  required,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5em',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    name: name,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    style: {
      ...base,
      ...style
    },
    onFocus: e => e.currentTarget.style.borderColor = 'var(--focus-ring)',
    onBlur: e => e.currentTarget.style.borderColor = 'var(--border-on-dark)'
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/**
 * Select — dropdown field for party size / time slot pickers, matching
 * Input's dark styling.
 */
function Select({
  label,
  name,
  value,
  onChange,
  options = [],
  required,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5em',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    name: name,
    value: value,
    onChange: onChange,
    required: required,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      font: 'var(--text-body)',
      color: 'var(--text-on-dark-primary)',
      background: 'var(--ink-800)',
      border: 'var(--border-width-hairline) solid var(--border-on-dark)',
      borderRadius: 'var(--radius-sm)',
      padding: '0.9em 1em',
      outline: 'none',
      ...style
    }
  }, options.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.value ?? opt,
    value: opt.value ?? opt
  }, opt.label ?? opt))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const LUCIDE = 'https://unpkg.com/lucide-static@0.469.0/icons/';
const iconFile = {
  phone: 'phone.svg',
  pin: 'map-pin.svg',
  clock: 'clock.svg',
  instagram: 'instagram.svg',
  facebook: 'facebook.svg'
};
function Icon({
  name,
  size = 18,
  color = 'var(--cream-200)'
}) {
  const url = LUCIDE + (iconFile[name] || 'circle.svg');
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center'
    }
  });
}

/**
 * Footer — logo, address/hours, social row, legal line. Icons are Lucide
 * (CDN, no brand icon set was supplied — see readme Iconography section),
 * tinted via CSS mask so they follow the token color system.
 */
function Footer({
  logo,
  address,
  hours = [],
  socials = [],
  legalLinks = []
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      borderTop: '1px solid var(--border-on-dark)',
      padding: 'var(--space-9) var(--container-pad) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Jimmy's Tapas Bar",
    style: {
      height: 40,
      width: 'auto',
      marginBottom: 'var(--space-4)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-display-sm)',
      color: 'var(--cream-200)',
      marginBottom: 'var(--space-4)'
    }
  }, "Jimmy\u2019s"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-on-dark-secondary)',
      maxWidth: 280,
      margin: 0
    }
  }, "Tapas & Cocktails direkt an der Ostsee.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--gold-300)',
      marginBottom: 'var(--space-3)'
    }
  }, "Adresse"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-on-dark-secondary)',
      margin: 0,
      whiteSpace: 'pre-line'
    }
  }, address)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--gold-300)',
      marginBottom: 'var(--space-3)'
    }
  }, "\xD6ffnungszeiten"), hours.map(h => /*#__PURE__*/React.createElement("div", {
    key: h.days,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      font: 'var(--text-body-sm)',
      color: 'var(--text-on-dark-secondary)',
      marginBottom: '0.3em'
    }
  }, /*#__PURE__*/React.createElement("span", null, h.days), /*#__PURE__*/React.createElement("span", null, h.time)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--gold-300)',
      marginBottom: 'var(--space-3)'
    }
  }, "Folgen"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href,
    "aria-label": s.label,
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-on-dark-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--cream-200)',
      textDecoration: 'none',
      font: 'var(--text-caption)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-8) auto 0',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--border-on-dark)',
      font: 'var(--text-caption)',
      color: 'var(--text-on-dark-muted)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " Jimmy\u2019s Tapas Bar"), legalLinks.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, legalLinks.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      color: 'var(--text-on-dark-secondary)',
      textDecoration: 'none'
    }
  }, l.label)))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
const {
  useState
} = React;
const LUCIDE = 'https://unpkg.com/lucide-static@0.469.0/icons/';
function GlyphIcon({
  name,
  size = 18,
  color = 'var(--cream-200)'
}) {
  const url = `${LUCIDE}${name}.svg`;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat'
    }
  });
}

/**
 * NavBar — transparent-over-hero header that solidifies on scroll.
 * Logo mark + primary links + a single gold reservation CTA.
 */
function NavBar({
  logo,
  links = [],
  ctaLabel = 'Reservieren',
  ctaHref = '#reserve',
  transparent = false
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      background: transparent ? 'transparent' : 'rgba(14,11,9,0.85)',
      backdropFilter: transparent ? 'none' : `blur(var(--blur-nav))`,
      borderBottom: transparent ? 'none' : '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      height: 84,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      display: 'flex',
      alignItems: 'center',
      height: '60%'
    }
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Jimmy's Tapas Bar",
    style: {
      height: '100%',
      width: 'auto',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-display-sm)',
      color: 'var(--cream-200)'
    }
  }, "Jimmy\u2019s")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'none',
      gap: 'var(--space-6)',
      flex: 1,
      justifyContent: 'center'
    },
    className: "jt-nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      font: 'var(--text-nav)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-primary)',
      textDecoration: 'none',
      opacity: 0.9
    }
  }, l.label))), /*#__PURE__*/React.createElement("a", {
    href: ctaHref,
    style: {
      display: 'none',
      font: 'var(--text-button)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--action-primary-text)',
      background: 'var(--action-primary)',
      padding: '0.85em 1.6em',
      borderRadius: 'var(--radius-sm)',
      textDecoration: 'none'
    },
    className: "jt-nav-cta"
  }, ctaLabel), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Men\xFC",
    onClick: () => setOpen(v => !v),
    className: "jt-nav-burger",
    style: {
      background: 'none',
      border: '1px solid var(--border-on-dark-strong)',
      color: 'var(--cream-200)',
      borderRadius: 'var(--radius-sm)',
      width: 42,
      height: 42,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(GlyphIcon, {
    name: open ? 'x' : 'menu'
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-800)',
      borderTop: '1px solid var(--border-on-dark)',
      padding: 'var(--space-5) var(--container-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      font: 'var(--text-nav)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-primary)',
      textDecoration: 'none'
    }
  }, l.label)), /*#__PURE__*/React.createElement("a", {
    href: ctaHref,
    style: {
      font: 'var(--text-button)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--action-primary-text)',
      background: 'var(--action-primary)',
      padding: '0.85em 1.6em',
      borderRadius: 'var(--radius-sm)',
      textDecoration: 'none',
      textAlign: 'center'
    }
  }, ctaLabel)), /*#__PURE__*/React.createElement("style", null, `
        @media (min-width: 900px) {
          .jt-nav-links { display: flex !important; }
          .jt-nav-cta { display: inline-flex !important; }
          .jt-nav-burger { display: none !important; }
        }
      `));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
function App() {
  const {
    NavBar,
    Footer
  } = window.JimmySTapasBarDesignSystem_b07675;
  const {
    Hero,
    MenuSection,
    BarSection,
    ReservationSection
  } = window;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    logo: "../../assets/logos/jimmys-logo.png",
    links: [{
      label: 'Speisekarte',
      href: '#speisekarte'
    }, {
      label: 'Bar',
      href: '#bar'
    }, {
      label: 'Reservieren',
      href: '#reservieren'
    }],
    ctaLabel: "Reservieren",
    ctaHref: "#reservieren",
    transparent: !scrolled
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(MenuSection, null), /*#__PURE__*/React.createElement(BarSection, null), /*#__PURE__*/React.createElement(ReservationSection, null), /*#__PURE__*/React.createElement(Footer, {
    logo: "../../assets/logos/jimmys-logo.png",
    address: 'Am Strande 21\n23730 Neustadt in Holstein\n+49 1573 5256793',
    hours: [{
      days: 'Mo – Do',
      time: '17 – 23 Uhr'
    }, {
      days: 'Fr – Sa',
      time: '12 – 24 Uhr'
    }, {
      days: 'So',
      time: '12 – 22 Uhr'
    }],
    socials: [{
      label: 'Instagram',
      href: '#',
      icon: 'instagram'
    }, {
      label: 'Facebook',
      href: '#',
      icon: 'facebook'
    }]
  }));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BarSection.jsx
try { (() => {
/**
 * BarSection — atmosphere photo + two promo tiles (cocktail line +
 * "live at the bar" event), echoing the two-drink promo layout in the
 * brand's reference graphics.
 */
function BarSection() {
  const {
    SectionHeading,
    PromoCard,
    Divider
  } = window.JimmySTapasBarDesignSystem_b07675;
  return /*#__PURE__*/React.createElement("section", {
    id: "bar",
    style: {
      background: 'var(--ink-900)',
      padding: 'var(--section-pad-y) var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/bar-interior.png",
    alt: "Bar bei Jimmy's Tapas Bar",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "Geniessen \xB7 Entspannen \xB7 Wohlf\xFChlen",
    title: "Die Bar",
    script: "erfrischend f\xFCr Dich gemacht"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-serif-body)',
      color: 'var(--cream-300)',
      marginTop: 'var(--space-6)',
      maxWidth: 460
    }
  }, "Handgemachte Cocktails, ausgesuchte Spirituosen und ein Team, das f\xFCr jeden Moment das passende Glas findet."))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-9) auto 0',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(PromoCard, {
    image: "../../assets/reference/style1-berry-menu.png",
    eyebrow: "Empfehlung",
    title: "Lillet Wilde Berry",
    description: "Lillet Blanc, Beeren, frische Minze, Limette, Soda.",
    cta: "Zur Cocktailkarte"
  }), /*#__PURE__*/React.createElement(PromoCard, {
    image: "../../assets/reference/style2-green-menu.png",
    eyebrow: "Erfrischend",
    title: "Gurken Minze",
    description: "Gurke, frische Minze, Limette, Sprudelwasser.",
    cta: "Zur Cocktailkarte"
  }), /*#__PURE__*/React.createElement(PromoCard, {
    image: "../../assets/photography/bar-interior.png",
    eyebrow: "Jeden Freitag",
    title: "Live am Tresen",
    description: "Unsere Barkeeper mixen live \u2014 kommt vorbei.",
    cta: "Mehr erfahren"
  })));
}
window.BarSection = BarSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BarSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/**
 * Hero — full-bleed sunset terrace photo, transparent nav overlay,
 * the brand's eyebrow-triad + display headline + script accent pattern,
 * and the primary reservation CTA.
 */
function Hero() {
  const {
    SectionHeading,
    Button,
    Divider
  } = window.JimmySTapasBarDesignSystem_b07675;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/aussicht-sunset.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-hero)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
      padding: '0 var(--container-pad)',
      maxWidth: 900,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    tone: "gold",
    width: 80
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, "Tapas \xB7 Cocktails \xB7 Meerblick"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-display-xl)',
      color: 'var(--cream-100)',
      margin: 0,
      textTransform: 'uppercase'
    }
  }, "Perfekt gemacht"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-script-lg)',
      color: 'var(--gold-400)'
    }
  }, "f\xFCr jeden Moment"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-serif-body)',
      color: 'var(--cream-300)',
      maxWidth: 520,
      margin: 'var(--space-2) 0 0'
    }
  }, "Handverlesene Tapas, hausgemachte Cocktails und der sch\xF6nste Sonnenuntergang an der Ostsee \u2014 direkt von unserer Terrasse."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-4)',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#reservieren"
  }, "Tisch reservieren"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    href: "#speisekarte"
  }, "Speisekarte ansehen"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 'var(--space-6)',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1,
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--cream-300)',
      opacity: 0.8
    }
  }, "Am Strande 21 \xB7 Neustadt in Holstein"));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MenuSection.jsx
try { (() => {
const CATEGORIES = ['Tapas', 'Vom Grill', 'Weine & Cocktails'];
const DISHES = {
  Tapas: [{
    name: 'Gambas al Ajillo',
    description: 'Garnelen, Knoblauch, Chili, Olivenöl',
    price: '9,50 €',
    tags: [{
      label: 'Empfehlung',
      tone: 'gold'
    }, {
      label: 'Scharf',
      tone: 'berry'
    }]
  }, {
    name: 'Patatas Bravas',
    description: 'Frittierte Kartoffeln, würzige Tomatensauce, Alioli',
    price: '6,00 €',
    tags: [{
      label: 'Vegetarisch',
      tone: 'sage'
    }]
  }, {
    name: 'Pimientos de Padrón',
    description: 'Gebratene grüne Paprika, Meersalz',
    price: '6,50 €',
    tags: [{
      label: 'Vegetarisch',
      tone: 'sage'
    }]
  }],
  'Vom Grill': [{
    name: 'Pollo al Ajillo',
    description: 'Hähnchenbrust, Knoblauch, Zitrone, Rosmarin',
    price: '10,50 €',
    tags: [{
      label: 'Empfehlung',
      tone: 'gold'
    }]
  }, {
    name: 'Chuletas de Cordero',
    description: 'Lammkoteletts, Kräuter der Provence',
    price: '13,00 €'
  }, {
    name: 'Solomillo',
    description: 'Schweinefilet, Pfeffersauce',
    price: '11,00 €'
  }],
  'Weine & Cocktails': [{
    name: 'Lillet Wilde Berry',
    description: 'Lillet Blanc, Beeren, frische Minze, Limette, Soda',
    price: '8,50 €',
    tags: [{
      label: 'Empfehlung',
      tone: 'gold'
    }]
  }, {
    name: 'Gurken Minze',
    description: 'Gurke, frische Minze, Limette, Sprudelwasser',
    price: '7,50 €',
    tags: [{
      label: 'Erfrischend',
      tone: 'sage'
    }]
  }, {
    name: 'Rioja Crianza, 0,2l',
    description: 'Trocken, samtig, feine Tannine',
    price: '6,00 €'
  }]
};

/**
 * MenuSection — category-tabbed dish grid. Client-side tab state only;
 * content is representative, not the full menu.
 */
function MenuSection() {
  const {
    SectionHeading,
    Badge
  } = window.JimmySTapasBarDesignSystem_b07675;
  const [active, setActive] = React.useState(CATEGORIES[0]);
  return /*#__PURE__*/React.createElement("section", {
    id: "speisekarte",
    style: {
      background: 'var(--surface-page)',
      padding: 'var(--section-pad-y) var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Sip \xB7 Geniessen \xB7 Entspannen",
    title: "Unsere Speisekarte",
    script: "mit Liebe zubereitet"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-8)',
      marginBottom: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, CATEGORIES.map(cat => /*#__PURE__*/React.createElement("button", {
    key: cat,
    onClick: () => setActive(cat),
    style: {
      font: 'var(--text-button)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      padding: '0.85em 1.6em',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${active === cat ? 'var(--gold-500)' : 'var(--border-on-dark)'}`,
      background: active === cat ? 'var(--gold-500)' : 'transparent',
      color: active === cat ? 'var(--action-primary-text)' : 'var(--text-on-dark-secondary)',
      cursor: 'pointer',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, cat))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 'var(--space-7)'
    }
  }, DISHES[active].map(dish => /*#__PURE__*/React.createElement("div", {
    key: dish.name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-3)',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-serif-lg)',
      color: 'var(--text-on-dark-primary)',
      margin: 0
    }
  }, dish.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-serif-md)',
      color: 'var(--gold-400)',
      whiteSpace: 'nowrap'
    }
  }, dish.price)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-on-dark-secondary)',
      margin: 0
    }
  }, dish.description), dish.tags && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, dish.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t.label,
    tone: t.tone
  }, t.label))))))));
}
window.MenuSection = MenuSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MenuSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ReservationSection.jsx
try { (() => {
/**
 * ReservationSection — dark card reservation form over the tapas-spread
 * photo. Fake client-side "confirmed" state; no real backend.
 */
function ReservationSection() {
  const {
    SectionHeading,
    Input,
    Select,
    Button
  } = window.JimmySTapasBarDesignSystem_b07675;
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2'
  });
  const update = key => e => setForm(f => ({
    ...f,
    [key]: e.target.value
  }));
  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.date || !form.time) return;
    setSubmitted(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "reservieren",
    style: {
      position: 'relative',
      padding: 'var(--section-pad-y) var(--container-pad)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/tapas-spread.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-overlay)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 640,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Gutes Essen \xB7 Gute Getr\xE4nke \xB7 Gute Zeiten",
    title: "Tisch reservieren",
    script: "wir freuen uns auf Dich"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-on-dark)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-7)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 'var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-display-sm)',
      color: 'var(--cream-100)',
      marginBottom: 'var(--space-3)'
    }
  }, "Vielen Dank, ", form.name.split(' ')[0], "!"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--cream-300)'
    }
  }, "Deine Reservierung f\xFCr ", form.guests, " Personen am ", form.date || '—', " um ", form.time || '—', " Uhr ist bei uns eingegangen. Wir best\xE4tigen per E-Mail."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSubmitted(false),
    style: {
      marginTop: 'var(--space-5)'
    }
  }, "Neue Reservierung")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Vor- und Nachname",
    value: form.name,
    onChange: update('name'),
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-Mail",
    type: "email",
    placeholder: "name@email.de",
    value: form.email,
    onChange: update('email'),
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Datum",
    type: "date",
    value: form.date,
    onChange: update('date'),
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Uhrzeit",
    type: "time",
    value: form.time,
    onChange: update('time'),
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Personen",
    value: form.guests,
    onChange: update('guests'),
    options: ['1', '2', '3', '4', '5', '6+']
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      marginTop: 'var(--space-2)'
    }
  }, "Jetzt reservieren")))));
}
window.ReservationSection = ReservationSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ReservationSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.DishCard = __ds_scope.DishCard;

__ds_ns.PromoCard = __ds_scope.PromoCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
