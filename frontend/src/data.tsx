export const menu = [
    {
        id: 1,
        title: "MAIN",
        listItems: [
            {
                id: 1,
                title: "Dashboard",
                url: "/home",
                icon: "home.svg",
            },
        ],
    },
    {
        id: 2,
        title: "Employees",
        listItems: [
            {
                id: 1,
                title: "Employees",
                url: "/employees",
                icon: "user.svg",
            },
            {
                id: 7,
                title: "Attendance",
                url: "/attendance",
                icon: "",
            },
            {
                id: 2,
                title: "Leaves",
                url: "/leaves",
                icon: "order.svg",
            },
            {
                id: 3,
                title: "Departments",
                url: "/departments",
                icon: "post.svg",
            },
            {
              id:4,
              title:"Holidays",
              url: "/holidays",
              icon:"calendar.svg"
            },
            {
                id: 5,
                title: "Clients",
                url: "/",
                icon: "",
            },
            {
                id: 6,
                title: "Projects",
                url: "/",
                icon: "",
              },
        ],
    },
    {
        id: 3,
        title: "HR",
        listItems: [
            {
                id: 1,
                title: "Sales",
                url: "/",
                icon: "element.svg",
            },
            {
                id: 2,
                title: "Payslip",
                url: "/payslip",
                icon: "note.svg",
            },
            {
                id: 3,
                title: "Reports",
                url: "/",
                icon: "form.svg",
            },
            {
                id: 4,
                title: "Accounting",
                url: "/",
                icon: "calendar.svg",
            },
            {
              id :5,
              title: "Assets",
              url: "/assets",
              icon: "asset.svg",
            },
            {
              id :6,
              title:"Assets Info",
              url:"/assetinfo",
              icon:"assetim.svg",
            }

        ],
    },
    {
        id: 4,
        title: "MAINTANENCE",
        listItems: [
            {
                id: 1,
                title: "Settings",
                url: "/",
                icon: "setting.svg",
            },
            {
                id: 2,
                title: "Expenses",
                url: "/",
                icon: "backup.svg",
            },
        ],
    },
    {
        id: 5,
        title: "PERFORMANCE",
        listItems: [
            {
                id: 1,
                title: "Goals",
                url: "/",
                icon: "chart.svg",
            },
            {
                id: 2,
                title: "Employee Performance",
                url: "/",
                icon: "log.svg",
            },
        ],
    },
];

export const userRows = [
    {
        id: 1,
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJ4BEQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAQIHAAj/xAA7EAACAQMDAgUBBwMDAgcBAAABAgMABBEFEiExQQYTIlFhcQcUIzKBkaEVQrFSYtFywSQzQ6LS4fAW/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QAIhEAAgIDAQADAAMBAAAAAAAAAAECEQMSITEEE0EUMlEi/9oADAMBAAIRAxEAPwCjiWthLQIlrcS0lBDRJW6yUEJq3WX5rqOGCNk0bAelKY5+RzTjTR50ijrQo4Z2lsZCMCnMGlllGVo3SLEbM4zVkt7NQg9NUjCjvSrjSv8AbW39K77athtUx0rU2yDt9KZoNFSex2D8tCSoqnBGKba/qtlpcbecJHcjISNdx/8Aquea34umeJ5beJIIzwNxBfP07GoSx2x069LK7RqMEgY96he5giwzzKoPAOapVjpOuavKD5Vx5TNkyTN5ank/v+gq52Hg61eEx6i0jq45CSng/wAVGWFR9ZbHtPwlEiEZV1I7c1IOlMofAugxw7oGn3+xmOB+lRHw1FbTb7aSdF/07tyn9DUpRiin1Tf4BitgKkkhki9Mgx8jvWFHNTFaa9NDQ00+3Iqa4baCKVXMnNPGNit0jW4usZpZNe4bris3TkZpNdSNk4rXD4/6RllGD6hx+bNDPc7zSWaZgeTW1vIzOOassQfuoPuIWmXI7UFJa4GKeQxM0Y6Vq9mT2BNaI4UZp5m2IoYth/WjYnqa4tCq56UEBsptKGhOxhuyKil9QxQjXQRTyP3qKKSS4bCnAprQXI0uVZX9FZgvng/PTCKwL45qK604bOlTlCxVNo3/AKrvT81CS3XmMB70vmieLpWsL/jLUdB/tdDLavtXqk3j3r1V1RLdiYX7e9bDUD70t5r1QooNBqJ96yNSP+qlVbKM11HDhNTYY5q3+E7rzCpPOTVBjjJ7VePB6bdmetNGPTmde0YBowcU+UYHFV7RpAsYGacmYYHNO+HImZsVVfGfixNDsnW1aJ7sqThm4QdyaY6zrEGl6fNeXMgSKNeSTjntXCWu7W5vbnUdUEk3mOzQ2+8hTz1bvj4qfpVslOoXuq6nvu7md2uGzJjgEH/FXjw94c0aCcTxW6tKoyC/q2fv3qmaZdvcSPe+UscMXREXAJ+KfaJq0kdwu5uCOT7mllwfGk/S+s6quF6/NaxyHNA+duUHPUA15LnaeayTd9PQh4O7ebnrR6pvTP8AFI4HLrvTkU70+b0YYZqdWNdAd7ah85UYPBFIriAwvtJ47VbroD2qu6wQImbHIqT46OnBTjYgvG60rmOTRF5OCeDS95eeTxW3BDp5eR/hFcLuNAz264Jo4spPWoLkgIeea9RKkZWVu8jwx+tb2KgMOKxeuN5APetbaQKwyaT9OLVaFDGOlEqisaRW10VTGaKS8x1NVTEcSXVFVUKjr1pAwIB702muFlBoJ1GDSSY0VQjumIaidObkEmhr/hzW2nKzP8VG+jpWWuzdCB9KluguzpQllEwA64qe7YrHzT7oP1sQXsQpaq/iUyu3BOAaAAw9TcjkgndXqj5rNNsDQRV6s4PesVMYziiIE3EVAoo+0TkUDg22t8gcVafDw8or2xS/TrXco4FWOystqjaBXbUWWJstmnXeFGGpp9+GMluBVXt8xgUt1nWJ7MqZz5cDNtVE5aT/AIFCeTh31HvtN1y3NjHpzrIxlcOhQkKcHv7/AE+lUWS1mvIIrpY4xGp2hUOSPrW+palJqmm72lyyzbY4iMsoPWitHB0+FpXb0dlP5T710XyxXHtE0yf020W33ZLLkjHvUunTq8qKvRUxhhSp7g3dy2N0jA5wg3cfpUi3cNmT94YRseqn837UkrfhSFL06NZzE264I6dzWxcZ9Q5NU2PxnaQwKkFtJNIOpyAKCu/GeoFWaBLeE9ACdz9OoHSofTNmn+RBI6THdQWMfmXk4hQnGGPWpk8Z6PakDdI+emFrjq+J9Xjtw66ncbzId2VUgD6n5oO81O4uhm5uZpc/lPAGf2qiwIk/lyfEj6D0vxJp2sMI4GaOT/Qy4qbWpLK0sHnun9HZRyTXztpfiDU9JnWS0uChB6MMim99441W9nBu44pYlUgQsDtz/qPv9Km/j9HXy1RYL6+hmuZRaMzRg5GR0oCWd8E8iqbc6jcXD7jIE4xtiG0fxWbB5ri9hga5lTzG2ggluTwOPritMIqHhjlJydlrW6OQeta3F1uXgYo+80tkyVGB2+KSXkbxd60qaZOUGgC5fL/rUayYrWRsmonNBi0GC7wD6ulbJeOx4alTn2omBM4obB1GqzEjk1lpSEOTUcKHGMVtLCzL0rtg6sWXJ3Pz3ppo8AJU4oBrORpRxxVg0i2KFQQKjNl8UHY9srYlOKh1GzPl0/022BQcdqxqVsAmMVDZm140c2v42STpQLe9WjVLQE7scVX7mLbTqZmljoE8016vbKzTbEtDXWdLl025McgOB70tNdf+1PQgqvKqcjniuQke9aMkdWQTsytNdOXdIopUnUU+0eImUHFRZWK6W7SIMjpVqsLcbeR2pbo0KrGM46U7WVIR/wB6i27PQglQPdgRKcDmqb4pYrL5mP7OW6lasmp3gw2Gqna1PFcEgMRJjrux0rmm4k5tJiW48y3sUkUEkNv6dB/af2pxZxg6fbvc2xvrm4ydjyFVVR7460q1eYPIRgqQiKf9x+B2p/4UmVDDG+WeOOTCn55A/g10m9eCYYxeSpA8ul2uoxFbcz2aAkGIPlSfn3/WkOo6HJaS7CDjGQxHarNI9zJfNI5xG5CKgGMc0d4itRGi9WCHH71GGWV9NGb48a4iu2HhCa5hWUuCG/miz4TMKn8ONhTrRL8xwLC2PTxyabvLuU4FdPI7BHFHXw5Xq9j90uHgb0ofWp/yKCd1kjOBhs4AHerp4i0S41K4WS2hYsOMdiKg0rwFqdywZrZ+DxicL/lTV8eWLXWZZ4JqXEINH0ltQvYbVOWdgGI6Ad/4zXRvF/hKHUNFGoabAEurNds0cY5kjHfHuK10fQhoWopDOsQuSMsivu8sd9zdz+2KuOn6hZWE48y6jcucYHPWpzyf9WjRi+PWNqXrPn+K2SRickjqM0++z/SjqHiJGeP8O2UzEdiwOF/k5/Srb4u8KWlzr8lxoNxBBFcDdKjrkK/cj2zVj8JaHDo0EgDo8kmNxVSAAOwySepJ696tupRszrE1KmYvdPDIcjoKpetaeEya6hdIGUjGciqhrlr6W4oKXTRLGmcwuo/LcihGPWm2swlJCcUlJLEYFXUuHnyjToxklwAKd2NvuUcUHaWjM2SP4qx2cG0DilbHhBs2tbPJHSmQsFKdBUlqigjNNIUU4xU3I1RghGdNXrip4IPLcHHAp28AxnFQSxBRnFJtY6jQXp0+0AVteTb+9J/vHlNjNRzXoPf+aRlbRFqXqXGKrF2owacXl0W70mu39JOOtckJJoA216tPNFep6Mx3/wC0WzWSzlOP7TXzneRFbuSMDOGNfUvjSAS20i9iK+fNWsRDqEoAxzmvSlHaKZiiILa0Ysu7jmrNpkYjX5peke0g0bDMEFTeNFU6LRaXexRzipLjVAF/NVbe/Ea/mpdPfu7YU1N40UeehtqOps+QD1pebOT7xG90UCn1Bc5LY7UAzs35icGi7OZzOnmbmx0+KbX/AAk8jfWQ3sd0GeWeFo1nfoecAdB8VJoV0bG9S4lY8PgkdRn/AIq0XkAu9LkT0r6c5bgD9aqF3CZZrqSAAQwbSWHRh0NZ549XVloT8aL/ABbWiRpIowv5o2U8HPsO1C3bPOXhkPAX0k0ZpqvZXVvNy8KYzHgHdxjvSe4aY3ssspbc3Y9h7VicaPS+zZANuWU5Q856jvVis5sryQaR2KgblI4H6Zo6EiKYnk9sZrp9QkHRZ7VVyDx7VZdH2qQSRmqTaXGRwT14o6XVjZ25Ibc7dAKlG0y8nywvxRosDzvfC6aLgiTPO4VR/wClWQSW8hD+bGC27cct2HJpgNQvL47DbzXUmRkEFUX9SeaZWsOvxHy00vMTcndEpUH3FaKEpyVm6fdleA2TEwvGGBJyT9T709s5PTyaq1gzeZMjLs2SEFcYw3f+adW0wUYJp48VCNJux28oKVXtZYENzRbXaqDk8Um1Kbzc4pkBlK1r1OwxntSm1sWMmSOPpVlubXdIzHNZt7YL2qqZjnC2RWlqFUcfxR4jCipFUBajnlVEJJ4pWxkqRsJlTqaItr9d4APFVe71D1EKwxWttfYb81K0OpHQEuRInBoS6mPPNKLHUAVAJoqadWTINKNYvvZW3E570rlumzjNGXcuTgYoLyfMbOKNE3JngzP71HdRHZTa2s8LkioryIAEfFCw/hXfI+K9THYK9TWJR9I+KMGB+K4J4gUf1Nx75r6D8Sx5tnOO1fP/AIjGzVG+pr1I/wBEYY+i5YCRkCoLsBBgdaaJGxhyvGRS+9i25zSMLYsy0j4NOdN0V7o8rSzTlEl5tPQV0nQokBRRiguisX23hJQoJXrTCPwwiYOz+KukMaiEHAojy1Ixim4KUnWtBebQLqJGVPwyxyOwoaPw996urmMbvJaxTzWZfSGxxg1f5ooWtpUuNogKESEnA29+a4vrPiK51bXbfRNPneHSInCRoGJMir3Y9TnFSyL9KQk/CzqQLcbh0UZFJb/IbIFOXIMQB6Dpj6UFLAGHq4rysnp7GP8Ar0QNI8LM4bAPAqYXxJYH82Mgij2tYmV1fBBHWklzbNC26I5A4x7iimmhXaDk1CSJmAztx6aYWd4LrbJKAFXpjvVbXU0V8TbgV4x9Kb6Pf2UkgFwQqPwM+9K4P0aM1+ssD3aOcwtj4oaPXNVguPItpQE7+ihby902zkDW5Z2PzwKymsQzSbiBgLn9a6KkPKaS4MoG3SSuSNzvkn37H/FSPNs7jFKLefao56VrNdDnmrJEthhJd54yK085WFJnny3BqWOX5qqiSc7C5QDUQworQzZ70PcXaohywpqFJZrhUU0i1LUQQVB4obUNTyCFNJmmLnOa5IlOdG005ds9q3t5iCM4ocjJ4rZVwKfWyW7HlrdYIw1MVvCVwSKrdsx3YpnErlc0PrG+0KeQGTrRduyjpSklg4zRUE2OprpY6HjOx/HIvl9aAvpQRhetQi7Cp1rFqhuZfekjjbY08qigX1e1ep19w+K9Wn+OY/5J9D65F5lu4+K4D4ut9mrdP7q+h9SXdAce1cL+0C2eK9M23ABquJ/8Cv0TQ7REAaVaxIqqTW6XWB1FK9WnLgjPFBs5AlncGG6Dk8Ve9D1eMMpZua5wxp3olrqFxJFHCjF5WCxoBlmJOAAPrilizmjtdnqMLwDDAnHvUr61aQpmSeJT8uK5pc/drSMQ6t4hWydl9UEERmkj+HxgK3PQ+3WqzfSWfmMljqL3cZGQ8kRjb6EEn/NPYp2PUb1PEej3ljpN1AJSAsjE5wD2498YrikTm21aOYjawyD8Uw8OatNo8/mxO5jYgXEaEjzI+68HNR65BEl/K1vnyGbdETg+k8joSPjrU5ptDwdSLxaSLLbLLnJK9KjfGcikWkaiVVUBBXGCDTxSrJk8fFeVk9PYxyTiDzksCq4Le3SlN5aShSXPbhaY3lxGo9vmk9xqUcbEySgLjvQSf4GVIRXbtvZHjFQfiRqrBH2k8Htmt7i6jmn8xz6M9McmiX1CW5t/u0caRQjqccn/AIrVHYxTcP8AQeOVxuDHPPWirWTqCTjFWjTPBNkPBl14h126e18+MjTYgD+IwHDH3Bxx7+/IqsRRBSMHtVVjsj9g3juTszmoJrk5xmtIgcY4oW5DBvai8dDrNaGMThhzRMZHvS6EEqMUXHGeKqo8IPI7MX03lISpqv3t+Xzg07v4sxkVVrlCrGllEKyNkDyF+tYSsVlM54FKjrJlFTKueKjXdjpUsedwp0cwyxg9Y4p7BaApkigbBRuHFWK2H4Y+lWiI2I7u1A5ApZJIY2xmrHf4GeKrF7jfSzo5G6ytK2B0q2+HrQYG4ckVVtPUb14q7aJIqhcjtXQVMXJ1DL7kKxRf3iL4r1XtGfU7VcJvjxXJvtJsc28jbemTXXXIVSSQABkk9q4r9onjC2u5pbHSiJlX0vcY/MfZff61mwyq0amcsjSWWQiMEc4z2ottBu3jE0ttdNCc4dIjtOOvOO1M5/EUPhyFI9K8i61WVdz3QBZIM59KggerjJPQ5qs/1HVL53NxqF1uOTxIQMnrwKLoHo/tfDd2sMVz/T3iiZ9qyTjYAcZ5z7Vrq17caIk1lp17FLdXClJ5rb/007qD8859xQFxcX09slveahc3UKMWEbvlQ3c0PKCEDKQox0xR/AfvRO8DBuTyK2trfzOS205o0IZPUR+tb2kQ5J7mlUFY10RqBD0J2/355opIZprKeW2QyCErvCeplyeGx7Z4rzxjJI+lR6dqV3ol+LqyfZIoKnK5DKeoI7jpRflAQdcarb3l3LeafZi1EkhcRA5EZPJUfAOcfGKb6c2t38Ikiit1tvMWNriQhFQscDJ3e9JNe1hNf1Vr9LaO1kcYlWLlWPuOB2Aojw9E0xv9Lkzsv7OTb6sbZI1Min/2sP1rPkgteIp9k1/VjDXLC7023mmuLmyZ4bs2ssUTlmjbBwSPnBqt+V95nSNEM0sjBEQDksTgAfNWfWRJqK3zsgZrmws9QZs8eYEUOw/TcD85pFphex1G0vVAZ7W4SdVPcqwbGf0oYorW6B9k2usbWXgTWLyVFmNpa7w5HmShm9PVcL35Hemc/gy08NRCfxXexmTOYrG19bTe249l/wD3etPEHjI3aQRWETWSQTmWOVpsyL6SoQEBQBhj2z0yTVZ+8S3U25i0j4wZZCScDp1qyVCtjLxT4gvNfvRcXoSBQNsVvETst4+wUe+AATxnA4GKAgktppvLknitkVCfMkPDY7fWomj8vKNuO7q5xz9c17+nwTR5ESqvv3NHv4d6PrbRo7rTJb7TtVsrkQj8SFdySr2yAev6UqnVivr79DSjQdUm0TWYLu3YgxSgkEZyM1dPElmIL6Vo8eVP+PEQVYYbkjK8ZBz0rk7A1Qks29WGpqrIFGAKSupRsr27e1Tx3JK89qYFBN64IIxVYv19RNOJ58g0muG8xiKSTHiqBI4i54GaYW+nswztNMdH03zdvGaumm6DlVOypOReOOykLpxxytayWG3BxiulPoHBOylF5pOzPpoLINLEVa0VomB7U5hucR9QOKHuLbysnGKXTS7M1eEzPKLCdQuOCc1X52y/NFXE+8UA55ot2BIOtH2EVYrC72D8wqpJJsolL3YK5OjmrLh/UP8AcKzVQ/qH++sUdwandvta13U1ns/Dejhlkv4mkkdRlmUf2r7Z7n2rhzvKHMIaPeOMlR/Br6O8Rz2cGlX2p6mVt2MckYYqocJkhQD1OeoA55r5slXCoR1A6f8AahFUians6PCFCxYqFbpk9f1rXZslXHvUkzBlWVeSRhh71oh8+NTj1oQD8/NNwcxDKwnkVz16URcD8ML+tAqu++btg5o6cFm4H6e9cgGttby3cyW8O0EjJZzgKB1JPtVjuNE0rT4bUXmqTh7i3EySR22Y9p6HH5qF0LRrrU0NvaGONXUSXl3MdscEZ/KCff8Au2jk5Ue9WvxfaWOurA/hu9ju57KBYDZ7dkkiqPzR5PqPU7fzewNGxWUnVLGTT7kRu6SxunmRSx/kkQ9GH7dKVum4mnN5G/8A/O2LzHB+8zLED1ChULfpkj9aVRjDkFs470PQrguIa3ckZwaMsru8iuYri2OyaNw6Nz1HIqScblWPjLOOo7VPHhXJC/GQKVxGswz3jQwReYirBG0SYHPlli20nuMs371H93k7ynNFjpzWO9FRSADw2eX3Oc0Rbrt8xh/rqaIVvo1jdanP900+Bri5lY7I0xn568AfJo0ddAz4blkzt9uK3jAJGxdprodx9l9+mnrJbX9vPeKuZINhWMn2WQnn6kDPxVMvtL1LTrjy9R066ttvQyQkKfo35T+hrkIskX4yrXNoq3JDHbnPSrTa69O9jaafqitfWVuPwthCSxD2zjn9aR3kYZ1Y92JP71Lp5RpZC3APTHagkULWmiaTqyJL4f1OGZ2VjJb3biORCMcc9SfUfb/NJdT0a8tcfebaWLkqrMvBI7A9DSe4sfvF0ZoSY/8AcOMn3pvoviq/01ZLLUo1vrRxs8uUkqTzjntyTz/xQOEkyOjYet7O18yYcZp3q0Nkby6Wwd5bQSE27SJtYL2B56jpnvjPHSvaNbhiD7VLJwtiqT6PtBssKnpq86fahEUkVX9FRVK5q228iiMCoWb4xMvGpBpJqcKkU+eRcHikepSDPFTkwtFK1eIKGxVTvZMZFXHVjuJqn6hA2GquORnyRFTSbia9WhGCQa3FaEZDBrRjW5qJ8ngA1zOPV6t/Jf5/avUtlNGdi+2/zBqdgyyMbUwsY0z6Q3GT9SD/AB8muWqwfPuK6n9s8oEGjQ49WWJPwFX/AOf8VyV2MVycdCKu+IxfHltjtm6ltkkY/MPUtaD8NhIp47/IqWUbXWQd6GmfYGXqB0+hpWXJ7IBruRj7CipFMjbVPHcjtSy0dlDOrYIAz+1dvsPsu01NItpdRvLt7p4BLKYWAQE9Noxk468nnGO9dskAof3q21PSrewku1sLi2UKiScW8/AAJx+V8YGT1oePRI7dxNqer2MUS8g2svmyH/pGBz81fJPAHh6CGa4nF60YkMaIJz+bnr04GD068dOaU6/pXhDS9KhuPuuqZm24kinAaMEE5CsSDzjg/uKO1goqOv6tJqt0rsHSGFPLhSR9zAZyWZv7nJ5Y96VRMp5BBB6EVd11nwVp9laMmg3LXbrvXzdswIDuDlmPBIA5C8c4FV3WdUGs6pLfCBbdZMBYlOQoHTmigCxsNcwjtyamiOVzWjL/AOMi/wCk1tCF2DIrgktZFRlVz3rKhc9BROYT+WEt7f8AFXT7GprdNduYZGHnS2wEWeuAwLqPqMftVV0u/sNMlNzqNgL2DYUMDYwSRwTn2q3aBbeF/EOsQnRdNu9Ol+8RwRTRzlGjfYzu3VgeFAGR9aDA47Kjrt5exWdtLcXBSOGKNmdyOFUcg4+lcX8Z+OZ9YkOn6cZLfTd2X6hp/r7L8fvV08Y6xeaLoVzZ6skVwbtJYbWeE8sdvJkTAA78qTnrgVxeb/zlFcjPjxV2RHfDG74NQ2ShV8x2Cr81JqZLOEHxQ8zFCgU4Ea5PHWg3RpGoni2gqQynoR2rSXy3QpIow3JHU0Gj7SHCrufnOOg+PmpbuNQgTHzn3o2dQTH5xyCQR2O4c/sKm0i6+5XoW5XbHJxuzwD2pRawlZAEdgw568U+i0S51TTdRuIWhENlGj3CuxBZWJHpwDzx3xSSVoaMqdl00/IYEfrT2Itjg1WtPlKxxkD0sBgU9guTgcVjfD1o9DJGcKee1JLuQ5waZTzFlJ+Kr97KdxqUijQBfRF2PFKruy3IcAU6B3nmsSouw8U0STRz7UbQxOSFoAVb9WtkO4+4qsz24Xoa1QlZiyQoGNG6dZGZwevNQwQF5dpbirdolkvp6V0pUDFC2Cf0v/aK9Vr+6JWahszZoj//2Q==",
        lastName: "Hamilton",
        firstName: "Lewis",
        email: "lewis@gmail.com",
        dateOfBirth: "24/09/1989",
        designation: "Web Designer",
        reportingTo: "Josh",
        phone: "9876543322",
        createdAt: "07.02.2024",
        status: true,
    },
    {
        id: 2,
        img: "",
        lastName: "Gerold",
        firstName: "Kevin",
        email: "kevin@gmail.com",
        dateOfBirth: "02/08/1996",
        designation: "Web Developer",
        reportingTo: "Prem",
        phone: "9876593289",
        createdAt: "07.02.2024",
        status: false,
    },
    {
        id: 3,
        img: "",
        lastName: "Henry",
        firstName: "Jass",
        email: "jass@gmail.com",
        dateOfBirth: "21/12/1978",
        designation: "Team Lead",
        reportingTo: "James",
        phone: "8927638346",
        createdAt: "07.02.2024",
        status: true,
    },
    {
        id: 4,
        img: "",
        lastName: "Josh",
        firstName: "Bob",
        email: "bob@gmail.com",
        dateOfBirth: "27/04/1990",
        designation: "Android Developer",
        reportingTo: "Thomas",
        phone: "9865798349",
        createdAt: "07.02.2024",
        status: false,
    },
    {
        id: 5,
        img: "",
        lastName: "Rendell",
        firstName: "Kensey",
        email: "kensey@gmail.com",
        dateOfBirth: "15/07/1999",
        designation: "IOS Developer",
        reportingTo: "James",
        phone: "9865907832",
        createdAt: "07.02.2024",
        status: false,
    }
];

export const leaveRows = [
  {
      id: 1,
      img: "data:image/jpeg;base64,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",
      lastName: "Hamilton",
      firstName: "Lewis",
      reason: "Going to Hospital",
      leaveType: "Medical Leave",
      fromDate: "21/07/2024",
      toDate: "26/07/2024",
      status: true,
  },
  {
      id: 2,
      img: "",
      lastName: "Gerold",
      firstName: "Kevin",
      reason: "Vacation",
      leaveType: "Casual Leave",
      fromDate: "23/05/2024",
      toDate: "25/05/2024",
      status: false,
  },
  {
      id: 3,
      img: "",
      lastName: "Henry",
      firstName: "Jass",
      reason: "Important function",
      leaveType: "Casual Leave",
      fromDate: "15/03/2024",
      toDate: "18/03/2024",
      status: true,
  },
  {
      id: 4,
      img: "",
      lastName: "Josh",
      firstName: "Bob",
      reason: "Personnal",
      leaveType: "Paternity Leave",
      fromDate: "10/03/2024",
      toDate: "18/03/2024",
      status: false,
  },
  {
      id: 5,
      img: "",
      lastName: "Rendell",
      firstName: "Kensey",
      reason: "Going to Hospital",
      leaveType: "Medical Leave",
      fromDate: "02/02/2024",
      toDate: "05/02/2024",
      phone: "9865907832",
      createdAt: "07.02.2024",
      status: false,
  }
];

export const departmentRows = [
  {
      id: 1,
      departmentName: "Web Development",
  },
  {
      id: 2,
      departmentName: "Application Development",
  },
  {
      id: 3,
      departmentName: "IT Management",
  },
  {
      id: 4,
      departmentName: "Accounts Management",
  },
  {
      id: 5,
      departmentName: "Support Management",
  },
  {
    id: 6,
    departmentName: "Marketing",
}
];

export const topDealUsers = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      username: "Elva McDonald",
      email: "elva@gmail.com",
      amount: "3.668",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Linnie Nelson",
      email: "linnie@gmail.com",
      amount: "3.256",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Brent Reeves",
      email: "brent@gmail.com",
      amount: "2.998",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Adeline Watson",
      email: "adeline@gmail.com",
      amount: "2.512",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Juan Harrington",
      email: "juan@gmail.com",
      amount: "2.134",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Augusta McGee",
      email: "augusta@gmail.com",
      amount: "1.932",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Angel Thomas",
      email: "angel@gmail.com",
      amount: "1.560",
    },
  ];

  export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "125",
    dataKey: "users",
    percentage: 45,
    chartData: [
      { name: "Sun", users: 400 },
      { name: "Mon", users: 600 },
      { name: "Tue", users: 500 },
      { name: "Wed", users: 700 },
      { name: "Thu", users: 400 },
      { name: "Fri", users: 500 },
      { name: "Sat", users: 450 },
    ],
  };

  export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$56.432",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
      { name: "Sun", revenue: 400 },
      { name: "Mon", revenue: 600 },
      { name: "Tue", revenue: 500 },
      { name: "Wed", revenue: 700 },
      { name: "Thu", revenue: 400 },
      { name: "Fri", revenue: 500 },
      { name: "Sat", revenue: 450 },
    ],
  };

  export const chartBoxSales = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Sales",
    number: "1230",
    dataKey: "sales",
    percentage: 45,
    chartData: [
      { name: "Sun", sales: 400 },
      { name: "Mon", sales: 600 },
      { name: "Tue", sales: 500 },
      { name: "Wed", sales: 700 },
      { name: "Thu", sales: 400 },
      { name: "Fri", sales: 500 },
      { name: "Sat", sales: 450 },
    ],
  };

  export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
      { name: "Sun", ratio: 400 },
      { name: "Mon", ratio: 600 },
      { name: "Tue", ratio: 500 },
      { name: "Wed", ratio: 700 },
      { name: "Thu", ratio: 400 },
      { name: "Fri", ratio: 500 },
      { name: "Sat", ratio: 450 },
    ],
  };

  export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    barChartData: [
      {
        name: "Sun",
        profit: 4000,
      },
      {
        name: "Mon",
        profit: 3000,
      },
      {
        name: "Tue",
        profit: 2000,
      },
      {
        name: "Wed",
        profit: 2780,
      },
      {
        name: "Thu",
        profit: 1890,
      },
      {
        name: "Fri",
        profit: 2390,
      },
      {
        name: "Sat",
        profit: 3490,
      },
    ],
  };
  
  export const barChartBoxSales = {
    title: "Total Sales",
    color: "#FF8042",
    dataKey: "visit",
    barChartData: [
      {
        name: "Sun",
        visit: 4000,
      },
      {
        name: "Mon",
        visit: 3000,
      },
      {
        name: "Tue",
        visit: 2000,
      },
      {
        name: "Wed",
        visit: 2780,
      },
      {
        name: "Thu",
        visit: 1890,
      },
      {
        name: "Fri",
        visit: 2390,
      },
      {
        name: "Sat",
        visit: 3490,
      },
    ],
  };