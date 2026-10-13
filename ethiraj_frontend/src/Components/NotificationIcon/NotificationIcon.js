import { keyframes } from "@mui/system";
import { Box } from "@mui/material";
import NotificationIconImage from "../../Assets/NotificationIndicatIconImage.svg";


// Define animation
const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`;

export default function NotificationIcon({ count }) {
  return (
    <>
      {count > 0 && (
        <Box
          component="img"
          src={NotificationIconImage}
          alt="notification"
          sx={{
            animation: `${pulse} 1s infinite ease-in-out`, // 👈 animation applied
            width: 12,
            height: 12,
          }}
        />
      )}
    </>
  );
}
