const url = "https://www.youtube.com/watch?v=DZzU828C3Dc&pp=ygUKa2xlYmVyaWFubw%3D%3D"
const button = document.querySelector("button")

function openInNewTab(url){
    const win = window.open(url, "_blank")
    win.focus
}

button.addEventListener("click", () =>
openInNewTab(url)
)

