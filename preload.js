// window.addEventListener("DOMContentLoaded", () => {
//   const replaceText = (selector, text) => {
//     const element = document.getElementById(selector);
//     if (element) element.innerText = text;
//   };

//   for (const dependency of ["chrome", "node", "electron"]) {
//     replaceText(`${dependency}-version`, process.versions[dependency]);
//   }
// });

// window.addEventListener("DOMContentLoaded", () => {
// const ws = new WebSocket("ws://localhost:8080"); // เชื่อมต่อไปยัง WebSocket Server
// ws.onopen = () => {
//   console.log("WebSocket is connected");
//   // ส่งข้อมูลหมายเลขห้องไปยังเซิร์ฟเวอร์
//   const roomId = document
//     .getElementById("room-info")
//     .textContent.split(": ")[1];
//   ws.send(
//     JSON.stringify({
//       type: "joinRoom",
//       room: roomId,
//     })
//   );
// };
// ws.onmessage = (event) => {
//   const data = JSON.parse(event.data);
//   if (data.type === "roomInfo") {
//     document.getElementById("room-info").textContent = `Room: ${data.room}`;
//   }
//   // คุณสามารถอัปเดต UI หรือจัดการข้อความจากเซิร์ฟเวอร์ได้ที่นี่
// };
// ws.onclose = () => {
//   console.log("WebSocket is closed");
// };
// window.sendMessageToServer = (message) => {
//   if (ws.readyState === WebSocket.OPEN) {
//     ws.send(message);
//   }
// };
// });
