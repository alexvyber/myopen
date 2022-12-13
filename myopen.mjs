import open from "open"

const openArr = [
  {
    name: "gh",
    href: "https://github.com/alexvyber"
  },
  {
    name: "node", //
    href: "https://nodejs.dev/"
  },
  {
    name: "1000",
    href: "https://github.com/alexvyber/1000DaysOfCode"
  }
]

try {
  const target = openArr.find(item => item.name == process.argv[2])
  await open(target.href)
} catch (e) {
  console.error("Your shit wasn't found")
  process.exit(1)
}
