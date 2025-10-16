
import React, { useState } from "react";

// MessageBox Componen
const MessageBox = ({ onClose, toSubmit }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) {
      alert("Please fill out all fields");
      return;
    }
    toSubmit({ email, message });
    onClose(); // Close after submitting
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative flex flex-col items-center">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>
        <img
          src="/myphoto.jpg"
          alt="Shubham Gupta"
          className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-blue-500 mb-4"
        />
        <h2 className="text-xl font-bold mb-4">Send Message</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-3 border rounded"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 mb-3 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Projects Component
const Projects = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
        >
          {project.githubLink ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            </a>
          ) : (
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
          )}
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

// Main App
const App = () => {
  const [showMessage, setShowMessage] = useState(false);

  const projects = [

    {
      title: "MiningAI",
      description:
        "Developed an intelligent system to predict potential rockfall events using machine learning. The model analyzes geological and environmental data to forecast risk levels.",
      imgSrc:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExMVFRUVGBcaGBgVFRcXGBcYFhYXFhkXFxgYHSggGB0lHRUWITEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGhAQGy0lHyUtLS8tLS4tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBFAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xAA+EAABAwIEAwYDBgUEAQUAAAABAAIRAyEEEjFBBVFhEyJxgZGhBjKxFELB0eHwI1JicvEVM4KSBxZDorLC/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDBAAFBv/EAC4RAAICAgIBAwIEBgMAAAAAAAABAhEDIRIxBBNBUSJhFDKRoUJxgbHB0QUjQ//aAAwDAQACEQMRAD8AwgCVrANEgTpWhonZz3qJ7E8hJJXHdgjgmlqMLJUTmJuQriDAKakkcxOYFzAgyiJU7JlDUlYUmgjqoT0XhsJo0wUlXCNmCAmMcBYmCo8S6abzOxg+WvupV72V5LqhKvDgbt1QRw7gdFdcNcalNj4jM0H1EooYcGbKfrcXTKelyVlZhMMd1ufhHBgd4rK9lBW54E8BjR0lZfLzNw0aPGxbZdvpyFS8RZDtoVniahixhVFY5r6pfFvsXOtUQQkLVLlhIQt6mYnEhLU0tUxCaVRTJuJCQkIUhTSnUhWiMhNIUhCaQn5CNEZCQhSEJsJlIVojhJCkITSEbBQyF0J0LoRsWhkJCE5xQj8TyRsFBELkI/FpE9i0Y3MlaU1wTdFmbNtBARFGkHIDOi8KSLqc2Uggh/D3awonYM8lbYDjQYYyhw6rQ4X7NUBJhp2WWfkzh2jVHxoT6ZgnYZMGHVtxUsa85SCFXCuFqjNtWZJwSdHMoFG4anCGFfkn9qUJNsMUkQ16odWyjWw9ArB7AabhsDHsLrEGtUZVGYEkk5r3MuFhymI81pMBiHva4t+WNDqDA89/ZRyRaaHg7s2/wdgW1MNFs1MlhjkDLP8A4kDyVweB5bxPRUfwJjslcyP4VUsYSbQ57ZZINx8jvQr1CthgDHtC8fzPUhkbXTPQwZo8VFraPO+K4FuYBoIV5gcCWsDTG0I/E4HvXHmjGUAACVmlmlKKRqqMXyXuV+PEMmJ5quweqv8AGObF3A+GqrG02C3uteDI1CjNOKlK2Q4hvPyUBCLxDwQOiGcFtxz1sy5Yq9ERTCnuKYVoTM0kMKaU4ppVFIRoaUiUpCnTEoRNISpCjYBqRKWroT8haGwm1NFIUPVeipAoCrk3CrKzyLK0qBA4ikSZVYyEcQfMVy7IuVLEoz/artU2rTymFzCsdm+tktKnKv8Ag1Gm4Fr7GLHryVJSqCUdhcaGuHMHUKGZOS0XxVF7J+IcO7N0AaprMOQ2QStGctdmbdsT57qs+IMBUpMDmg5TusuPPbUX2aMmGrkujM1wZTqVPmh31XSpGYlekujzpPYVVAAsoA4p5rB3RdhqBfUpsGrntb/2OX8Ua0LZWYzDy5lbaQYtykb9EZ8OPIpunUc/7WhO4xQApODZLIIFr/O3KZHSVUUKrqZkmHEOBGotcexB81lf1pll9LRacO4tXdUqUKb2sFTd060iHtAvAJc2JIOu2q9m+Fvi84mi0VobWYO8J1AsHdCYu03C+d3VSHgg5TGo2Oq9I4VDKT3Zoc4NdmJP3Z9ZaSPIHqo+XiUoUU8eS5Wz1T/UWvFiCUDVxJMgEwqLhVmhWOdeasKgzd6trSCajgQNVBdRurRdMbieRVYponJpkjimOKY6rKjICvFkZUPJTSVE6s0alKKoOhVkyLHFNKUlMdVA1MJ0xGhSmlPBlJCbkDiMIUT6saqchDYrDZgeaZSXuK4iNxLTumuxjeaqnYd4MJ9Sk4DRWpfImywGIDgo+zBVPTx4BujaGOYQYMHqi7QUkwz7L1TTgyhH8TgjdHYfEBws4LrkgUiA4TouRXbHkVyPNi8UYjiGHDTqgC1HYx5zGUG96hBujbNKxsqbDt7wQwciaVWLp2IjWYB4FzIbaTsIV/R+IaLmFloaIgiZ2svOKvEnkQDA6IZuIWN+Ep7kafxbjpG2x7cE68tBOw0We4hgKY7zHAjkqhz1zCdlqx4nD3Mk8nL2JMpCseCUz9oonlUY7ya4OPsCiRw6KdMnNLwTBFoDi0QfEFScOw5Y5zgf/breoo1CPeEfWT6O9JoAxtEuoQNbe17+kLPvwUvgCSTptYSSeWq1+SaZAtYwqqkMtZut5FuuW56WWLFkdtGicPpTKTiPD8pBEkyAANyQPrdaf4br56QBuaZIjpFh0sSFX8fwhguF7g+ECB7n3SYPFdliXz8r3EO6S4kHyn3KrOXOOxIx4vR6DwF7Wg09Iu3q07/h5K2eJWPr400shDXOOa2UTAPzg9N/UrQYDHh7S7QDUkwB5rBwlVs0tpvQS5nWy6m0KKtjKZsx3aHcBp03jn+iHw+IEwCeiZW0K9MOfCBxdZwHdF0W0pS1FSoDjZkeJVqjRc3KE4dj6jbjRariOFzR3QUCOEXt3RyW6GePGmZpYneiWjxaR3rFV+L4sXWEQrI8IbEKsxnCcrZCbHPHYs4zoL4fxXnBVtSxTXLBis5h0MK0wfFDIAAVMmH3QkMnszViqCYTpQWEZmOkWnVSmkR/lZG0nRo4urofVe0alQYkNI1CGxNB5vug+yqHuq0Uvkk/5FJxEDOY0QoJC0A4M8SSJQlbhj50/fRa45o/JB45fBXU3yi6NJ4uCrPh/BQAXVAQAiQWZoGm0pXnV0h1glVsp+0ri10i0FUgHT2XLlm10I8QuI+Cy6+YX2VTjvguq0924W1r8bpiWhxJFtOt4KjwvxAARmNrzZfPRz+THaPoJYsLMbh/g6oAC4eQR9T4cpFnyuDui2bOK0XAHO2/j+ICNw1Om+4eyeromNb6JX5ea/qB6OJLR5fX+C3m7THiq3G/CWIp3iR0Xu+H4GXAEkDwv7hF4jgtN0TlAAjSD4nmtOPyvJq60YpxwXVnz1S+G60gOESrHg/wrUrS6mC7K4NMCTOugv5r2ip8NUh/uOGU+SyXxNx77CDRwVPJs+rEzOhG09VX8Rmb4tU/6AWPH3HZTfHFBuGfSohhAp0mDMT8xMuLo2u4iOizmGxANOs42AYGg/1VHBsf9O0P/FB8a4vWxFQ1Kzi5xAueQtYbIKhVc4ikHENe+nmiLwSB7Pd6rXjxVEjknstKoJa2DbU32BafwVNxSq6m8PGx9hBP0VpxFvYVq1DMXsY4AF4GaC24JAvc8tgq57w6o2dL/wD0coRxSx5GmVeSM8aoscLxZ1MHNQpVmvaRFSYg9RBGu3RZ+uwgmTJJJJ5kmSfVWeKrNcxmUj73kM1vZBVmyPBaXh5QtdkFkqW+jR/DmL7RkE99kDy+6729l3EHmnZtmkk6+3lHpCzPDsWaNVtQG2jhzadfz8lquPYbO0VG3AEmN2nf8VCKVqX6lm9NAOF4q5jmkHQytnU4rhGgPNQQ64a0S4c5H3fNebSnNetGTxYzp9EIeQ46as9HHF8NlDu0mTAaAc2urp+UeqOrsiTIygTmJsRG3PVeV9op241/8x9VCXg/DLR8qNbR6W2k4xaZEiCII5ylLYJFpGoBBI8Y0WVw/FT9nAFUtLZtN56LPuxrw7NJnxUoeLOTe+iuTNjil9z0ZzwoqzKZsJk6rEYfj1YFsvJDdibeCtavxDTiWs753Jlo023TPxskWKs2OS/2WGI4NTcZTKPw20HMCQAZTsDxukWS894RIA1S43i2Qh2aWG4bB08UOWZPiMseNrkyxw2BH8x/NFfZI+9pzWcPG/vZDlOhDvfRM/8AUgJyxA5jVTeHLIrHNjjpl9jaTi5pa5oA1Ck7IgEmDy2Wcp8YGhJ6fqkxPHJENBt96evJH0cmkhfVx220WmNxVVggNE89Sg6WIrNElgE7xCBf8RvbZ0O8QEVR4/TrNLXNyx7jp1T8MkVuIFLHJ6kB4zilQyJsq3M86SVoW4Wg9pc1wjn+cqvpYR7XggmJiW3jy/for480apKiOTFLtuwRnEqjO7mIXK2rYfKYY0vGpcQLu31XJ1mT/hJOH3GCqntqhVlcPp/Oxzf7mkek6qL7UoPEzSspdCoFNSxMbrP/AGxN+1OSPA2Msx6Bwz4ifTt2hA8bLQ0PjMQAXMJt83+YXjpru5pvaHmo/hGupNBeaMvzRTPaPin4jp9i2pQdSe8HRzpySLnKLEjS/uqT4W+MaNTJQxFFhLjBflG5sSF5zh6VV5hjXOJ2bc+y1fCfgbGOyvLGtJvlc8NdHONl04JO27YsaSrpBX/lD4YZTIrMp5WGxLflDrmCNpXnvDsN/GpTp2jB6uAXonxpSqU6OfGYgsZ9xmbOargLiGfMQALnovNcZxuixjwzNnbkLSYs6dLcoWnxXJrSdWQzcV21ZN8T1c2IxDp1eY9YhVGFcMoPW/QEZVZYzF0q7QxlMU3Q3MQ6btY0PMG0F7pAGg5wo8LgjTOVwu6R4wC7XlYjzWqbu2yEVpUQtoFjWtJB12i20810oirScYbMtaAGHm03E9RMKE0SqQetiyW9A1Vm4Wl+FsdmYaL9Wju7y2fwJ9wqI0Sm4eq6k8Pbq0+vMeaz5oqL5LplccrVBHEaAY9wEi+kG0iddPJDAq14y6pWNIsfDKhaDIm7pI8Pljz6Kt+znor4ZXBWSyx+oaCpWlM+zu6eqcKL9BB81W0TpjhUTM8IwcJrkTkF73c380v+kVuTP+7UvqQ+UP6WT4YEHDku7Uqd2AqDl6pgwb+Q9UecReEvgSnWKt8LjZp5HNJLT3T6yEHhMPlMvAjoVb4nHUTTDWgNIM6fVZ80raSVmnDCk23X2GOxTi0tPy+Gh89EjnUwwENlxF526hQV8VnZBMEe6FrYlsADUbqagUc6JhiGl1wnfaWtJGUEKrfUk81Pg8M54zgdwGCRBjSRHO6q4L3JLIx+JYHXFl2E4PXqECkxz5MCOetzoLBNwT2PeRUBaxrZ+bI8v7sgCbxDhHWdloOCsqupPFOq+k2oXfeJIpGC4saT3SdMw2PIhBzcVoFKTKzheGBpy9xLXO0aY+UOmQb65OkFXeLrPw9DM1oL8sNky6TcgD7rf06InhGFDbuZHZgxckDKdZOpJlY3HVq1eoH9nILhIuc7nTlYGgxAgT9eWfeR7K/lWgyphatUNea7aRIPdc4T8zjmIi0zKRPwmKcARkaYNyRmuQCQDl0k7LlQmaKti5HeOboQPx1VbNDPL6QcNO6cn0tK6nUtr+nSNkBiBckNkfr+/RaXFNUyMZNO0WjMPg3HuMd0l51VngcBhRBNIE9XPI+qx76sDe3M/RH4HjxENcJ0vv5rFn8STX/XJ/qbcHlw/wDRL9DY9hQdrRpAdKbR+F/NSUmYZny0KRPWm0/UKhOPZu8K0wVRp0IPgV5WTDkgrd/uenDJjlpV+xouGVgySxlOmTqabAwkdYV9TxjXASIcPvbnxWWoVUfSrwvOnKSY8/HjJaLD4t4PhuIYcUcRn7rszXMIa5rspbImREONiCF81fF3CvsuLrYcEua1wAJsXAgOaTFpgjTeV9C1cb1XkX/lHDtOLbU/nY3zIlv0DV6//G+Xknk4T6r9zzPK8RY4cl8mUw2HJl4+6QI/qAH4fRXlHjUMLarJEm4F9bmN/JDcLj+M292B3pyTaNJsjYzeeo/UL1vzdmRKuiz4Ww1GEtacoNiASIubeUFJVarTgZaaAgRJJE68vwTMS50/oEscj5NFXiXBMqI6JMRRBpl4F2uaCOYeHGfItj/krIOY7/cB8so59E80G5CQCGuzCJm7Mj/LX6pskk4tMWGOnaYHwU56bqe7X03N6ZnhnsXe6hrWcRbXbS9xCNwWEeypmptzENcYmJDB2luZ7gMbwoce1uabiQI3iJZ/+fdJ4uZSVB8jE4sFDoS9qUhbyTStmmZdoK+3Py5Zt+90wYp3NQBpUgpW3S8YodObJ24sp5xRQeQ7JeydyKHGIeUgn7RKaXhQZHcilDDyKFINv4JDCnwXD31nZWeZOgnSfQ+iEynkVtfhKkGYfNu8l5B5CWMm3yy1xlLN0tHJW9ld/o9IfwWkPrER3rAak28mxf7wldw6l9nY6nWY809e0A7oJEwBqTMaSb62Vli30cKX4io5sjMGiLvOpJ3EvBEaQByCyXEeI4jFmYLQbgCRYCM0fcHU6qNsfQuHw1Oq+GvDGtN3HMTMEiM2viQOS1OJBpUA6iJqGLElzu80tY0xchokxv6kj8M4ZSplppEPp02do4vIMvdfMQRYkb7WtZE9uXVDiswDBZoDpD3PblaXbDKZ13cdIuJOzkqBcdWfRoNpujtK0moS7vfLmda9hYG8XAm6q2VX0i1r3F9V3daJgN7pPytmIAv4jVTYF7qryXCo5zjmc+8NblIZSDptfvWiJT6vEaFKHPYH1G5uzaGuc5xIAdl2EaZtTeNQCOtB72ZTEVsTncBTzwSC4MfcjnDhf920Co3CfC4rN7SpVfRLiYpig9+VsmAXSL+K5PyQlBzXSIJk73v+ahbUmWG0zuZHIhPrEEAutydyNxshatM6+8W/futKZFohxDHNfBvsZ9LJWiRY3GvPzUldxLYPzCIPI233n8UC3W9tiE1fAP5lsyraNwLwNkOMUWukEjziPyKGNSLg+a6vcSDCNgov6fxPXptzAte0fzCfKdZ8SrfAfGAdd4hsaideRC8/dmm0wdeU8xGiOw9E2J/fUrPPw8OW7ii8PLy4+pM3zOP03xBcJtcR7rCfF3FW4mtkEAUtHEzmkibbae67H4ns2E7mw8VkHvJdbVJDwcWGXKPY8/MyZY8ZFu2uWlrqZEvBYZGg1J9ApKVak5xGWbC5J+m+mqGwVIgFzvAfin06V4AjmVojCjO5lvwrEFlQy4ZIsPyEaK1rY+mR83sVnGNOqdl5J340ZO2KvKlFUi0dWa7S92jzcQPxRmFxJFKq0XipTka2LazSRyuW+yryzK1jf62km2pIn6QrjEV6tSl3mmGUy0OywMorscJgXMAmeULL5HFRaNOFyck2G8AcHhsG5lnUSC36FZjHUO0fSphxaagmR/YfbM1WXAcT2Pfklge0yGuOhvaOQCqqvEslSgQ0OyZundJgny/NY/Fhw8mSXT/zs0eVPlgTfaX9ilNMyQQSRIN5uDBR2BLhTZ/KC8Hoc1h9fUobGY4Zhl1JcSJkXcYEhWOCLXU3WgGo6L3ubDrEg+S9i1xPLSdjhXhTMxo3UDMKLa3POIHPQpooC4+pP75Kb4stGc10G/bWfsKXD1c5AYHOJMWG55nQearq1AMczKA6f59JtyjqrI44gh7AKZALQGAQGlrmwJk6OOs7clOXFdFY5Jslp5SXAuaA3fXMdwyNY56aXuJZVqtGl+h28x+iH7SxOsG5/Awoqbw4OLg7ukAAEAu8S6IGnupNNvQ3qUti4niGUgMbmds1w1OwsQvSaVDKzsyWwxokaSGNbMnYBxJlZX4R4VTfiXONKG02zLnZ+8TAgEWtmv0stfUoudWFQEhtNoGUD59ydfIC1+YRlGhVPkZQYhhd3SC5r8od94vdPyyYYIMlwEmYFzYrh2BdRaW5WtdWgVKt82WYyMGgcAdzsfmXcW4RnqtfTeGUiG1Q+BlbEEZAbTpHirqhS+84d4j+G2SOzZcZ/wC7vXdrfaSkloK2VHHq1HC4UUmjKLMEbwZuYMjcnWUJRxjOxqS6mATlh0Q0ta7bnAJjw5yp+OYNlQdk3UPzi0WAg947SBrN45JeD8GYQDBy5YMgEEEQ4E6zGWeY81K1RQEZjKtGgXjI4Bhg5ryHFpcQNra85nmo+A8KyO7SqHVHvAcCJJBuZAmxIdAsB0Cuca2i2nVLbQYMCA1xsYkd54aSYGnogvh/C1K76tQOyMdZrW/dgZbu0kAzYnWyddCNmY+I+LP7WGNcwZWy20gul99ZPeF1yueI/DTHVXlrsrQYAAAsABvyMjwAXKicRNlUM4bcAX5GDrOg8+ihdVE9DtzkzEjawUNPFuLg3UDefSxSsqtcC1xEGY0mQJ5K5M7OTeI9beB13TGtJsdTpP0lRzHesdje3ONYT+2Bm4hoEg6+N9QimCiJ1pBg/SfHRNw+bkTO3r6IurS7gdMjUGZ8o2IQrMVCpFchJOg/D8PI7znDwG35lTvpx94en6qtZjv3KdVxJIsb9VZUuiTbYFxJzqjg0XAOvXdM+w5R+iIbUDbDkn1Khjb/ADt463S17hv2IGUZ3gD9yiW4cRr++eqipG371P8AgqZuIuJi1kyQrYrqcbi6nwlHV520Eep8kMX3KOaYAHJLNtIaCTY2ofl/ub9Vpq3EmDCuZLZ7EjWL5CBqVlsQdD/U0+jgVVcfxtUF1OP4doMHkDE+K8zyvH9Xj9nZ6GDN6d/dD34wCrnzloII7vKAT6mPdF4gCoHtpGQHAg2MNczQkbgn6rKh45R4E/mnUcS9k5TlnWE/pNU49oV5OSafTLipw45hJEgm39xstBg8ETTg/M2CB4XOnOInZY6liqrnBrXmXFu8CZtO2q1PAcS+mS2sWnWHBzSb6g78l0vUpCpQsjLOVpIMQSffwTC6Haunci4F9hurCWk/MJJmAR1KYzAmo05BeYHLTTMbbEx4rQ0kRTBKzJgtJidXGO8fE2Vi7g9SlUDXvpukAgsdnbBGziPEeRvEE6T4A4DT7WvXxLGPp4eiXDO4ZDUzQwkiQR3XjceMLOY3iBfVdUvLzJLiS46ak8hAA2AA6roRtnTlSHYimQ0DYxHKdNOX4qDIyRoXi+gkfv8ANF1MS3KDaTOu1tJQVIwdtpI15KkY7EkzQ/DGLNAlxFnkBw6CY9lpcTxagXBgqNcT90OgHUAE8rlYLK4eFvQWtHn6pmPblM5h46QEMmLkGGTiemVKLcneEtbBgCwDRMNA2AGiAo4qnUplxeHBwzEyASNLxBABlsdCszgfjQUaIpuBMWBkEwXCQRra4tueiA4Vhzi+0BeWMqPkZTd0XkyLQDpe46LHlXE1Y3yCOI4+4p03l3fGfILNABtYkNAsAJMwVp+EUXsZ2bzJcc1heMoBAHMhoPmVW0uHMw7Q3I5wLzBDjnl7AwQABrlF9sxPMougHOeKkABrWsAcT3crgSSfvEzlj3uoOkU7JKfCQ5xzD5pIaW3DXNIMnY3Fuh5qyo0+zYWsyshsNA+VpiM3qUTg6TWgtaABJsJi5JPnf2TX0yTfS208/wAx6Ky6JM6jRIaACIAGuYE7z7rlIGE6C375pV39AHhANRsEPEeBHhcXRFPiAJyuZP8AUD9JUTKoAyhrurnQHawMoER5nyUrnxJLC4RrcRbYaO8Vs4keQRReS4jS1mmNP7gfdJUZUJJeP5YJENG8Hbl781HWry3MHQYAiWkgxfX6Rskw1YxIc51ryY8p0K7idZFWBa0gEwSP37KHNzOqNxEOZuD5QSOXLVVJeeRTR0hJbYXnF7/4THVEMKnimmsmsFBZidLLm1PT97IUV7JadQLrBQca1otqmitKCNa6XtEeQKDs+nLMPO91airKzxradFaU68gHouewx0E4u7HAcreKr+L4gBodEh0X6ESPofRGh87hD9k1zezdcAgf8ZkEeGnkVJxKplOQTfs3/wDUwmOZvld/1K0DqMQ0PzFw0vYciZ20hNo8Mc45cwgXMyT7hNwl0hea9yhp1W5m2MyPqtG1zbgm+oNyLxFtVD2Apkht7AZpFv8AErmUHPJ3EfMRHnrKZQrsRzvoscJVpBjiWlz4gOdZrJ1LRPedaASYE6G0I7H1HEFzy8DLAdDmw2zRBtA5KtxNSBlGm55ncp9LugTuhSDbLvFfFNTs30apL6VV1Mlpc4WY81C1sGGyYGhjaJKdV4tQqUMpplrs8seCCGU2sLRSDbam5O+qosRTa4QRPLbwgoGrw95+R1jeCY9UOCjs7m5FnxF5ayW3EyRfS/5lC1MS4QNnaXk/vRDYLHuns3jppcEc0jsQ0vA73cJF/RFM5osGY+qYGYyNL69PTe6TG1n1WhskRp+x9VDmFt59v1TqhtITNWhE6BqOHdMkgTYQD6DYeausBi30HhzHyGmC0gkEEQQR4HXnCqGP5hSmja4BafRI8aaHWRpm7wvHKNZ8Oe6nGXKCAee9xEkDbRW+Fyl1Nk5ouSM2SQQ6fGSDf8F5zw8k2kADYNH4WV5huK1KQs4mTPvOoib9fqoS8JtXFlV5aTqSN7gcU2TTzQ8d7LvBP5lWDW7C0fsSvOP9Q+0YmliWPFM0/wDcF4IJMDqCdeUBeiU6l7CREghSScXxZRvltEdF+ZoLgWkzadBJiesLk6pI++B4idSuROPF8RTp03STmJG/5CPdBOrl5IcIB3BvH6p1ai2Tcz53P4p+FYZmw2zE2HnFvqtzhbMqnSGvqlsdw3EXtI685/JRODjqQ0G8RofxKnrV6jjoXQdSYbbxKiZH3rX+6Z+viF1A5EtOpADS7NGwFoGl1DjXtcILIOk/gIUkg/ICB/SdQeZNoXMw2cwRJnd17ydk1XoHKtlPVZGhUcu5unxV+6g5vddTEfTrN0I7Dvi8a8zZI8YyyIqXPeLJO1O49grxuHa4loAHVwOo+uq52CYI3O8xtqu9GXyH1o/BSdseQ9F3bdB7q2GFBm17W/JOfgc1zvsBtEyh6Uvk71IlR23T6/mi8LjwLGY2RNLhrXWA9Y81I7hrb6DoRMx4borHPs55IdDP9QZz9k9mJcTIG0QdeeqloYZrHA6c4ERGuuvoi6rW5j3TbU6DwA1KdQfbJua6RFRw7BMifG9xpryv7omtRloBMf228ufqhKThOUWk3JJ06Ky7hGYfj+KpFJk5NoCdQi0kCRJdGk69Ux5LYySGmdTeNJAj9wparieSi7BzJzuF7gQJF9R06dUr+wy+5BQaXeoAkFTV7GBy9B+wn1ajgMzACAIh3M7zuVHTq1DAAZPQQ73JzBTopY5pdF/LdKCLa87FNNQgG4ny8YPVB1uIjTLfaPx+q5tI5KxmLHalzxZzbafOQYnpHPoocJisru/vuRfwO6ShVIsdfCNf8o4B5AIm3QfW4KRK9jt1pikg/K6RzGyVhga/j9VPSwpt/DAvs6Z8RsnVcMZjQ8ot5HdVUXVkXJApARuEqwIiRve45x6qFmGc47A9beino4Vw1LQOt/ZGN2CTVEwsJMxOwHXSydTxADecbECP1UBeBp5/vZSuAibN1vKqiRJQrZDnaS0HlyO3UHktJwr4/p04pVqbxo3OyI5SQTM72lZSg2yDxmDzSWnrfYjQhQnCMvY0Qm4+56hjPi2lTdEOO9mP5kfydEizHAOJYXsWjEUx2jZBcaYdmEyDI6EC9+7O6RYHCV9Grmvky9Tu2I1iLnbqNEyHGXFtuhkX5SuXL02tmJPQceGuDJz2trJ66Sgix7QSTmaNTp6DYX0XLk84pE4Sb7EpCRAF/IWP5o1jI+V2UxsLkfQbdUi5LHoaXZI6o4sEzl0zTJNkKKWS5MGL2n20GiRcqSWrETCsPSzNsJcRv+migOEe0tzOtNy3XlvzXLkeKasHJpi1GlxtBGl9BcgWm59lO3D35iZ5RyMbrlyVLsMnVA+IxYZYTab/AKKCriSAHAHSDfl0SrlOcnspFLQ7BVXPqNzfLM3Nzlv+SdXfFzuSfwXLkv8ACF/mKzFYq4MWB2/JHUXkyZGQwAIv+4XLkibtlGkkiVzw2QYsBtz2sonMk2Jm0T+iVcu9wewlUBouTYiY3ItKYHZTmcTAiYsYAsLeS5cufZyJnVGOEsJtYgjnz2QmGyl/ygO59Uq5dDbQZaTJ8Sx5cBAMiJGsefiiaTS1pLzZomdyI6ae65cqqNWRu6QTh8UNJkgDbn/hAYzjTCIHePUG3guXJJ5Gh8eNMjp4p057dQrJlQPvv+5XLkcbFyCVI80JXqlwABnlt+/1XLk0mCK9wppTly5AKIalIE8vBcuXLgn/2Q==",
      githubLink: "https://mining-h8w4.vercel.app/",
    },
    {
      title: "MystryMessage",
      description:
        "This project allows users to send messages to each other and provides an AI-powered suggestion feature to help draft messages. Users can save their conversations and work on them.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY6O6znXjR6dAHtU8jygFDhuLy_wxRRIwCDw&s",
      githubLink: "https://github.com/GuptaShubham1512/MystryMessage",
    },
    {
      title: "LearningDisco-LMS",
      description:
        "I have built a project that provides a basic frontend for a Book Bank system. Further enhancements include integrating a chatbot and adding a 3D interactive version.",
      imgSrc:
        "data:image/jpeg;base64,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",
      githubLink: "https://github.com/GuptaShubham1512/LDisco.git",
    },
    {
      title: "WebLLM(A Simple Chatbot)",
      description:
        "Another project example showcasing frontend and backend integration with React and Python.",
      imgSrc:
        "data:image/png;base64,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",

      githubLink: "https://github.com/GuptaShubham1512/React.Js.git"
    },
  ];

  const handleSubmitMessage = (data) => {
    const phoneNumber = "917479774187";
    const encodedMessage = encodeURIComponent(
      `Email: ${data.email}\nMessage: ${data.message}`
    );
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
    setShowMessage(false);
  };

  return (
    <div className="min-h-screen bg-blue-200 flex flex-col items-center p-8 space-y-8">
      {/* Profile Section */}
      <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-6 w-full max-w-5xl bg-white p-6 rounded-2xl shadow-md">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQHUHiwnD0hvUA/profile-displayphoto-shrink_800_800/B4DZWLS3uKHAAo-/0/1741798736336?e=1759363200&v=beta&t=5bcat6QuLtuyiZzdoLNH-3GvxuSMN9y3HJ8HBmN5pyk"
          alt="Profile"
          className="w-28 h-28 object-cover rounded-2xl shadow-lg"
        />
        <div className="space-y-1 text-center sm:text-left sm:ml-6">
          <p className="text-lg font-bold text-black">
            Shubham Kumar Gupta
          </p>
          <p className="font-medium text-gray-500">
            Engineering Student at LNCT Group of Colleges

            <p className="font-bold">
              Passionate and dedicated software developer with strong expertise in C++, Data Structures & Algorithms (DSA), and the MERN stack. Proficient in building full-stack web applications with React, Node.js, and MongoDB, with a solid understanding of database design and management. Adept at problem-solving, writing clean and efficient code, and delivering innovative software solutions. Enthusiastic about learning new technologies and contributing to impactful projects.
            </p>
          </p>
          <div className="flex gap-x-8 mt-6">
  <button
    onClick={() => setShowMessage(true)}
    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
  >
    Hire Me
  </button>

  <a
    href="/Shubham_Gupta_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
  >
    Resume
  </a>
</div>


            
            

          {showMessage && (
            <MessageBox
              onClose={() => setShowMessage(false)}
              toSubmit={handleSubmitMessage}
            />
          )}
        </div>
      </div>

      {/* Projects Section */}
      <section className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          My Projects
        </h2>
        <Projects projects={projects} />
      </section>
    </div>
  );
};

export default App;
