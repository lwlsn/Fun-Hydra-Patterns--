noise(2).out(o1)

shape(4).scrollY(1,0.1).scrollX(1, 0.1)
   .modulate(noise(4,0.2))
	.blend(o0).mult(noise(20,0.9).thresh(0.2))
  .diff(o1)
  .blend(osc(20,0.2)).modulate(noise(4,0.2))
  .thresh(0.62)
  .diff(o0)
  .out()
