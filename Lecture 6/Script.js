alert(`!! مرحبا بك في موقعي الذي سيحسب درجتك `)

let grade = prompt (`اكتب درجتك بالأرقام`)

console .log (grade)

if ( grade >= 90 && grade <= 100 ) {
  console .log (`%c 🥳لقد حصلت على امتياز` , 'color:#3a86ff') 
} else if ( grade >= 80 && grade <= 89 ) {
    console .log (`%c 😍 لقد حصلت على جيد جدا ` , `color:#fb5607`)
} else if ( grade >= 70 && grade <= 79) {
    console .log (`%c 🙂 لقد حصلت على جيد ` , `color:#e09f3e`)
} else if ( grade >= 60 && grade <= 69) {
    console .log (`%c 😕 لقد حصلت على مقبول` , `color:#d62828`)
} else if ( grade >= 50 && grade <= 59) {
    console .log (`%c ☹ لقد حصلت على ضعيف` , `color:#ff006e`)
} else {
    console .log (`%c 💔 راسب` , `color:#9e2a2b`)
}

// [جافاسكربت ليست جافا ]