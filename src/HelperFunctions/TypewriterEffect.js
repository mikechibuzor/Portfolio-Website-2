// // let counter = 0;
// // const text =
// //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quis ut assumenda quas consequatur incidunt voluptatum recusandae dolor dignissimos nobis voluptate molestias blanditiis quaerat rem fuga sequi, fugiat nulla nihil.";

// // export const typingEffectHandler = (element) => {
// //   // if (counter < text.length) {
// //   //   element.innerHTML += text.charAt(counter);
// //   //   counter++;
// //   //   setTimeout(typingEffectHandler, 50);
// //   // }
// //   if (counter < text.length) {
// //     console.log(element);
// //     element.innerHTML += text.charAt(counter);
// //     counter++;
// //     setTimeout(typingEffectHandler, 50);
// //   }
// // };

// export class TypeWriterEffect {
//   constructor(element) {
//     this.text =
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quis ut assumenda quas consequatur incidunt voluptatum recusandae dolor dignissimos nobis voluptate molestias blanditiis quaerat rem fuga sequi, fugiat nulla nihil.";
//     this.counter = 0;
//     this.element = element;
//   }

//   typingEffect() {
//     if (this.counter < this.text.length) {
//       this.element.innerHTML += this.text.charAt(this.counter);
//       this.counter++;
//       setTimeout(TypeWriterEffect.typingEffect, 50);
//     }
//   }

//   outputSomething() {
//     console.log("worked init");
//   }
// }
