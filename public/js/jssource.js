// const projectiles = []
// const enemies = []
// const particles = []

// function spawnEnemies() {
//   setInterval(() => {
//     const radius = Math.random() * (30 - 4) + 4

//     let x
//     let y

//     if (Math.random() < 0.5) {
//       x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
//       y = Math.random() * canvas.height
//     } else {
//       x = Math.random() * canvas.width
//       y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
//     }

//     const color = `hsl(${Math.random() * 360}, 50%, 50%)`

//     const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x)

//     const velocity = {
//       x: Math.cos(angle),
//       y: Math.sin(angle)
//     }

//     enemies.push(new Enemy(x, y, radius, color, velocity))
//   }, 1000)
// }
// let score = 0
 // for (let index = particles.length - 1; index >= 0; index--) {
  //   const particle = particles[index]

  //   if (particle.alpha <= 0) {
  //     particles.splice(index, 1)
  //   } else {
  //     particle.update()
  //   }
  // }

  // for (let index = projectiles.length - 1; index >= 0; index--) {
  //   const projectile = projectiles[index]

  //   projectile.update()

  //   // remove from edges of screen
  //   if (
  //     projectile.x - projectile.radius < 0 ||
  //     projectile.x - projectile.radius > canvas.width ||
  //     projectile.y + projectile.radius < 0 ||
  //     projectile.y - projectile.radius > canvas.height
  //   ) {
  //     projectiles.splice(index, 1)
  //   }
  // }

  // for (let index = enemies.length - 1; index >= 0; index--) {
  //   const enemy = enemies[index]

  //   enemy.update()

  //   const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y)

  //   //end game
  //   if (dist - enemy.radius - player.radius < 1) {
  //     cancelAnimationFrame(animationId)
  //   }

  //   for (
  //     let projectilesIndex = projectiles.length - 1;
  //     projectilesIndex >= 0;
  //     projectilesIndex--
  //   ) {
  //     const projectile = projectiles[projectilesIndex]

  //     const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)

  //     // when projectiles touch enemy
  //     if (dist - enemy.radius - projectile.radius < 1) {
  //       // create explosions
  //       for (let i = 0; i < enemy.radius * 2; i++) {
  //         particles.push(
  //           new Particle(
  //             projectile.x,
  //             projectile.y,
  //             Math.random() * 2,
  //             enemy.color,
  //             {
  //               x: (Math.random() - 0.5) * (Math.random() * 6),
  //               y: (Math.random() - 0.5) * (Math.random() * 6)
  //             }
  //           )
  //         )
  //       }
  //       // this is where we shrink our enemy
  //       if (enemy.radius - 10 > 5) {
  //         score += 100
  //         scoreEl.innerHTML = score
  //         gsap.to(enemy, {
  //           radius: enemy.radius - 10
  //         })
  //         projectiles.splice(projectilesIndex, 1)
  //       } else {
  //         // remove enemy if they are too small
  //         score += 150
  //         scoreEl.innerHTML = score

  //         enemies.splice(index, 1)
  //         projectiles.splice(projectilesIndex, 1)
  //       }
  //     }
  //   }
  // }
  // spawnEnemies()