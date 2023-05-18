import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Section = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      style={{ border: "2px solid black", marginTop: "15px", padding: "5px" }}
    >
      <h3 style={{ marginBottom: "15px", marginLeft: '5px'}}>{title}</h3>
      {isVisible ? (
        <Stack spacing={2} direction="row">
        <Button
          variant="outlined"
          size="small"
         onClick={() => setIsVisible(false)}>Hide</Button>
        </Stack>

      ) : (
        <Stack spacing={2} direction="row">
        <Button
        variant="contained"
        size="small"
          onClick={() => setIsVisible(true)}>Show</Button>
      </Stack>
      )}

      {isVisible && <p style={{ marginTop: "10px" }}>{description}</p>}
    </div>
  );
};

export default function Instamart() {
  return (
    <div style={{ margin: "10px" }}>
      <h1>Instamart</h1>
      <Section
        title={"About"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      />
      <Section
        title={"Team"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.."
        }
      />
      <Section
        title={"Careers"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.."
        }
      />
    </div>
  );
}
