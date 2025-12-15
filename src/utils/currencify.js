const CURRENCY_CODE = "USD";
const LOCALE = "en-US";

// showLabel: "none" | "code" | "symbol" | "custom"
// labelPos: "prefix" | "suffix"

const currencify = (
  amount,
  code = CURRENCY_CODE,
  showLabel = "none",
  customLabel,
  labelPos = "prefix"
) => {
  if (typeof amount !== "number") {
    throw new Error("Amount must be a number");
  }

  const currencyFmt = new Intl.NumberFormat(LOCALE, {
    style: "currency",
    currency: code,
  });

  const numberStr = new Intl.NumberFormat(LOCALE, {
    currency: code,
  }).format(amount);

  let label = "";
  if (showLabel === "custom" && customLabel) {
    label = customLabel;
  } else if (showLabel === "code") {
    label = CURRENCY_CODE;
  } else if (showLabel === "symbol") {
    const part = currencyFmt
      .formatToParts(1)
      .find((p) => p.type === "currency");
    label = part?.value ?? CURRENCY_CODE;
  }

  if (!label) return numberStr;

  return labelPos === "suffix"
    ? `${numberStr} ${label}`
    : `${label} ${numberStr}`;
};

export default currencify;
