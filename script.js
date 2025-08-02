const platformLogos = {
  instagram: 'assets/instagram.png',
  facebook: 'assets/facebook.png',
  tiktok: 'assets/tiktok.png',
  snapchat: 'assets/snapchat.png'
}

const passwords = Array.from({ length: 500 }, (_, i) => `pass${i + 1}`)
const hackerMessages = [
  "Connecting to server...",
  "Bypassing 2FA...",
  "Injecting payload...",
  "Finding open ports...",
  "Starting brute force...",
  "Trying password...",
  "Encrypting packets...",
  "Accessing API endpoint...",
  "Spoofing device info...",
  "Simulating login request...",
  "Checking server status...",
  "Retrieving salt hash...",
  "IP spoofed successfully...",
  "Running anonymous toolset...",
  "Accessing dark web node...",
  "Using proxy tunnel...",
  "Capturing token...",
  "Firewall bypassed...",
  "Starting hash cracking...",
  "Updating brute engine...",
  "Uploading backdoor..."
]

let tries = 0
let lockout = false

document.getElementById('platformSelect').addEventListener('change', (e) => {
  document.getElementById('platformLogo').src = platformLogos[e.target.value]
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function startAttack() {
  if (lockout) return

  const username = document.getElementById('usernameInput').value.trim()
  const consoleBox = document.getElementById('console')
  consoleBox.innerHTML = ""
  tries++

  for (let i = 0; i < hackerMessages.length; i++) {
    consoleBox.innerHTML += `<div>> ${hackerMessages[i]}</div>`
    consoleBox.scrollTop = consoleBox.scrollHeight
    await sleep(300)
  }

  for (let i = 0; i < passwords.length; i++) {
    consoleBox.innerHTML += `<div>> Trying password: <b>${passwords[i]}</b></div>`
    consoleBox.scrollTop = consoleBox.scrollHeight
    await sleep(100)
  }

  consoleBox.innerHTML += `<div style="color:red;">> 🔒 Access Denied: Password Not Found</div>`

  if (tries >= 3) {
    lockout = true
    showCooldown()
  }
}

function showCooldown() {
  const overlay = document.getElementById('cooldownOverlay')
  const timer = document.getElementById('cooldownTime')
  let seconds = 30
  overlay.classList.remove('hidden')

  const countdown = setInterval(() => {
    seconds--
    timer.innerText = seconds
    if (seconds <= 0) {
      clearInterval(countdown)
      overlay.classList.add('hidden')
      tries = 0
      lockout = false
    }
  }, 1000)
}
