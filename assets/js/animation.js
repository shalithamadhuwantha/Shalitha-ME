new TypeIt("#target", {
  speed: 75,
  loop: true,
})
  .type("Software developer", { delay: 300 })
  .delete(17)
  .type("ecurity enthusiast")
  .go();

new TypeIt("#aboutani", {
  speed: 75,
  loop: true,
})
  .type(" cd profile", { delay: 300 })
  .delete(9)
  .type("at biography.asm ")
  .go();


new TypeIt("#contacttype", {
  speed: 75,
  loop: true,
})
  .type("python -m about.py", { delay: 300 })
  .go();

new TypeIt("#skilltype", {
  speed: 75,
  loop: true,
})
  .type("gcc -o skill skill.c", { delay: 300 })
  .delete(21)
  .type("./skill")
  .go();

new TypeIt("#certtype", {
  speed: 75,
  loop: true,
})
  .type("nasm -f elf32 -o cert.o cert.asm", { delay: 300 })
  .delete(33)
  .type("ld -m elf_i386 -o cert cert.o")
  .delete(29)
  .type("./cert")
  .go();

new TypeIt("#experince", {
  speed: 75,
  loop: true,
})
  .type("python -m Experience.py", { delay: 300 })
  .go();

new TypeIt("#myprojectType", {
  speed: 75,
  loop: true,
})
  .type("xdg-open project.asp", { delay: 300 })
  .go();


 
