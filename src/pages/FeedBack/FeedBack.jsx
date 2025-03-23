import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Navbar from "../../components/Navbar/Navbar";
import { useStore } from "../../lib/store";
export default function FeedBack() {
  const darkMode = useStore((state) => state.darkMode);
  return (
    <div className={`${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginTop: "32px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              fontSize: "32px",
              fontFamily: "Cinzel",
              fontWeight: "700",
            }}
          >
            Give me your feedback
          </div>

          <a
            style={{
              color: darkMode ? "#FFFFFF" : "#3333FF",
            }}
            href="https://t.me/Hidalgo_26"
          >
            {" "}
            Click here
          </a>
        </div>

        <Stack
          spacing={1}
          style={{
            borderRadius: "8px",
            border: "2px solid red",
            padding: "32px 62px",
          }}
        >
          <Rating name="size-large" defaultValue={2} size="large" />
        </Stack>
      </div>
    </div>
  );
}
