import React from "react";
import Picker from "rn-emoji-keyboard";

export function EmojiPicker({ onPick, isOpen, onClose, ...props }) {
  return (
    <Picker
      onEmojiSelected={onPick}
      open={isOpen}
      onClose={onClose}
      {...props}
      translation={{
        search: "Pesquisar",
        smileys_emotion: "Emoções",
        people_body: "Pessoas",
        animals_nature: "Natureza",
        food_drink: "Alimentação",
        travel_places: "Viagem",
        activities: "Atividades",
        objects: "Objetos",
        symbols: "Símbolos",
        flags: "Bandeiras",
        recently_used: "Frequentemente usados",
      }}
    />
  );
}
