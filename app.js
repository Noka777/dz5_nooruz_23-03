//1 - задание
function filterBooks(books) {
    const booksWithU = [];
    const booksWithoutU = [];

    for (let i = 0; i < books.length; i++) {
        if (books[i].indexOf("у") !== -1) {
            booksWithU.push(books[i]);
        } else {
            booksWithoutU.push(books[i]);
        }
    }

    console.log("Книги с буквой «у»: ", booksWithU);
    console.log("Книги без буквы «у»: ", booksWithoutU);
}

const books = ["Дюна", "урок", "1984", "Мастер и Маргарита", "Гарри Поттер и философский камень", "Колыбель для кошки", "утка"];
filterBooks(books);

// 2-задание
function reverseString(str) {
    let string = ""

    for (let i = str.length - 1; i >= 0; i--) {
        string += str[i]
    }
    return string
}

const str = "привет"
const string = reverseString(str)
console.log(string)