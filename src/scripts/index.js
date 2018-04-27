import TeleportAutocomplete from "teleport-autocomplete";
import getWeatherDataForCity from "./lib/weatherManager";
import mobileController from "./lib/mobileController";

document.addEventListener("DOMContentLoaded", () => {
  const input = new TeleportAutocomplete({
    el: "#input-city",
    maxItems: 5
  });

  input.on("change", getWeatherDataForCity);

  mobileController("left", "right");
});
