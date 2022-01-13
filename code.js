array_1 = ['pen','paper','book','bottle'];

random_number = Math.floor((Math.random()*array_1.length)+1);

quick_draw_data_set_array = array_1[random_number];

console.log(quick_draw_data_set_array);

time_counter = 0;

timer_check = '';

drawn_sketch = '';

answer_holder = '';

score = '';

document.getElementById("sketch_required").innerHTML = 'Sketch to be drawn : ' + quick_draw_data_set_array;