const gameAddr = '0x610178dA211FEF7D417bC0e6FeD39F05609AD788'
const contractName = 'Game5'

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr)

  // do whatever you need to do to win the game here:
  const tx1 = await game.giveMeAllowance(11000)
  await tx1.wait()
  const tx2 = await game.mint(11000)
  await tx2.wait()
  const tx = await game.win()

  const receipt = await tx.wait()
  console.log(receipt)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
