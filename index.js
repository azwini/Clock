setInterval(() => {
  d = new Date(); //object of date()
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  // dash = d.dashes();
  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  // function dash() {
  //   // Dashes
  //   ctx.lineWidth = 3;
  //   for (let i = 0; i < 60; i++) {
  //     let r = 135,
  //       l = 5;
  //     ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
  //     if (i % 5 === 0)
  //       (r -= l), (l *= 2), (ctx.strokeStyle = "rgba(0, 0, 0, 0.5)");
  //     let v = new Vector(r, Math.PI * 2 * (i / 60) - Math.PI / 2);
  //     ctx.beginPath();
  //     ctx.moveTo(v.getX() + c.x, v.getY() + c.y);
  //     v.setMag(r + l);
  //     ctx.lineTo(v.getX() + c.x, v.getY() + c.y);
  //     ctx.stroke();
  //   }
  // }

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
