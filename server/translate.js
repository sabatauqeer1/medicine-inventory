import { translate } from "@vitalets/google-translate-api";
export const translated = async (req, res) => {
  const { data } = req.body;
  const words = data.split(" ");
  const array = [];
  const seperatedWords = array.push(words);

  console.log(seperatedWords);

  const result = await translate(seperatedWords, { to: "ur" });
  console.log(result);
};
