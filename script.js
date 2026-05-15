document.querySelector(".form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.querySelector(".name").value.trim();
    const email = document.querySelector(".email").value.trim();
    const phone = document.querySelector(".phone").value.trim();
    const message = document.querySelector(".message").value.trim();

    const token = "8574341811:AAERiKO1p4fd22ChGGKrEiiM8gkXdaPfFzg";
    const chat_id = "8507718451";

    const text = 
`📩 Yangi xabar!

👤 Ism: ${name}
📧 Email: ${email}
📞 Telefon: ${phone}
💬 Xabar: ${message}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const formData = new FormData();
    formData.append("chat_id", chat_id);
    formData.append("text", text);

    try {
        const res = await fetch(url, {
            method: "POST",
            body: formData
        });

        const data = await res.json();

        if (data.ok) {
            Swal.fire({
                icon: "success",
                title: "Yuborildi!"
            });

            document.querySelector(".form").reset();
        } else {
            Swal.fire({
                icon: "error",
                title: "Telegram xatolik",
                text: data.description
            });
        }

    } catch (err) {
        Swal.fire({
            icon: "error",
            title: "Internet xatosi",
            text: err.message
        });
    }
});