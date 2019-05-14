// Move disk from Tower A to Tower C - yes
// Move disk from Tower A to Tower B 
// Move disk from Tower C to Tower B 
// Move disk from Tower A to Tower C 
// Move disk from Tower B to Tower A 
// Move disk from Tower B to Tower C 
// Move disk from Tower A to Tower C

// function TOH(n, source, temp, dest) {
  
//   if(n === 1) {
//     return
//   } else {
//     dest.unshift(source.shift())
//   }

//   console.log(`source: ${source}`)
//   console.log(`temp: ${temp}`)
//   console.log(`dest: ${dest}`)

//   TOH(n - 1, source, dest, temp)
  
  
// }

// source = [1, 2, 3]
// temp = []
// dest = []

// TOH(3, source, temp, dest)

// Move disk from Tower A to Tower C - yes
// Move disk from Tower A to Tower B 
// Move disk from Tower C to Tower B 
// Move disk from Tower A to Tower C 
// Move disk from Tower B to Tower A 
// Move disk from Tower B to Tower C 
// Move disk from Tower A to Tower C

// function TOH(disc, pillars, src, dest) {
//   if(pillars[dest].length === 3) {
//     return
//   }
//   if(pillars[src].length === 1) {
//     return
//   }
//   if(pillars.b.length === 0 ) {
//     pillars = move(pillars, 'a', 'b')
//   }
//   if(pillars.c.length === 0 ) {
//     pillars = move(pillars, 'a', 'c')
//   }
//   if(pillars.c.length === 1 ) {
//     pillars = move(pillars, 'b', 'c')
//   }

//   //pillars = move(pillars, src, dest)
  
//   TOH(disc, pillars, src, dest)
//   console.log(pillars)
// }

function TOH(disc, pillars, src, dest, spare) {
  if(disc === 1) {
    pillars = move(pillars, src, dest)
  } 
  else {
    TOH(disc - 1, pillars, src, spare, dest)
    pillars = move(pillars, src, dest)
    TOH(disc - 1, pillars, spare, dest, src)
  }
  
  //console.log(pillars)
  return pillars
}

function move(pillars, src, dest) {
  console.log(`Move ${src} to ${dest}`)
  pillars[dest].unshift(pillars[src].shift())
  return pillars
}
pillars = {'a': [1, 2, 3], 'b': [], 'c': []}

TOH(3, pillars, 'a', 'c', 'b')

console.log(pillars)