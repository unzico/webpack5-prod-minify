async function main() {
  console.log("Your code here.");
}

main()
  .then(() => process.exit())
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
