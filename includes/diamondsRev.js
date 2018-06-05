$(function() {
    var diamonds=[],
        left = $('#left'),
        right = $('#right'),
        container = $('.container'),
        diamonds=[],
        diamondsDesc=[],
        size=10,
        shape = $('#shape'),
        desc = $('#desc'),
        isIgnore=false;


    createElements();
    insertData();
    container.find("section").eq(2).css({'width': '40vw'});
    shape.text(diamondsDesc[2][0]);
    desc.text(diamondsDesc[2][1]);

    left.click(() => {         
        if(isIgnore)
            return;
        isIgnore = true;

        change('left');   
        container.find("section").first().animate({'width': '0'}, 300);
        container.find("section").eq(2).animate({'width': '20vw'},{ duration: 300, queue: false });     
        container.find("section").eq(3).animate({'width': '40vw'},300,function() {
            container.find("section").first().remove();
            diamonds[size-1].css({'width': '20vw'});
            isIgnore=false;
        });
    });

    right.click(() => {
        if(isIgnore)
            return;
        isIgnore = true;

        change('right');
        container.find("section").first().animate({'width': '20vw' }, 300);
        container.find("section").eq(0).animate({'width': '20vw'},{ duration: 300, queue: false }); 
        container.find("section").eq(3).animate({'width': '20vw'}, 300);    
        container.find("section").eq(2).animate({'width': '40vw'},300,function() {
            container.find("section").last().remove(); 
            isIgnore=false;
        });
    });

    function change(elem) {
        if(elem==='left') {
            diamonds.splice(size,0,diamonds[0]);
            diamonds.splice(0,1);
            diamondsDesc.splice(size,0,diamondsDesc[0]);
            diamondsDesc.splice(0,1);
            shape.text(diamondsDesc[2][0]);
            desc.text(diamondsDesc[2][1]);

            container.find("section").last().after(diamonds[4]);
        } else if(elem==='right') {
            diamonds[size-1].css('width','0');
            container.find("section").first().before(diamonds[size-1]);
            diamonds.splice(0,0,diamonds[size-1]);
            diamonds.splice(size,1);

            diamondsDesc.splice(0,0,diamondsDesc[size-1]);
            diamondsDesc.splice(size,1);
            shape.text(diamondsDesc[2][0]);
            desc.text(diamondsDesc[2][1]);
        }
    }

    function createElements() {
        for(var i=0; i<size; i++) {
            diamonds.push($('<section></section>'));
        }
        diamonds[0].css('background-image', 'url(https://ion.r2net.com/images/amazingHomepage/diamonds/round-Diamond.png?v=3)');
        diamondsDesc.push(['ROUND','Maximizes light return from the top of the stone']);
        diamonds[1].css('background-image', 'url("https://ion.r2net.com/images/amazingHomepage/diamonds/cushion-Diamond.png?v=3")');
        diamondsDesc.push(['CUSHION','Antique cut with 58 facets and rounded corners']);
        diamonds[2].css('background-image', 'url(https://ion.r2net.com/images/amazingHomepage/diamonds/marquise-Diamond.png?v=3)');
        diamondsDesc.push(['MARQUISE','Long, narrow surface makes it appear larger than life']);
        diamonds[3].css('background-image', 'url(https://ion.r2net.com/images/amazingHomepage/diamonds/heart-Diamond.png?v=3)');
        diamondsDesc.push(['HEART','Features a distinctive cleft at the top and superior brilliance']);
        diamonds[4].css('background-image', 'url(https://ion.r2net.com/images/amazingHomepage/diamonds/pear-Diamond.png?v=3)');
        diamondsDesc.push(['PEAR','Tradition meets brilliance in unique ‘water drop’ shape']);
        diamonds[5].css('background-image', 'url(https://ion.r2net.com/images/amazingHomepage/diamonds/radiant-Diamond.png?v=3)');
        diamondsDesc.push(['RADIANT','Brilliance combined with non-traditional cropped corners']);
        diamonds[6].css('background-image', 'url(https://ion.r2net.com/images/amazingHomepage/diamonds/oval-Diamond.png?v=3)');
        diamondsDesc.push(['OVAL','Elongated shape accentuates the length of the finger']);
        diamonds[7].css('background-image', 'url(https://ion.r2net.com/images/amazingHomepage/diamonds/asscher-Diamond.png?v=3)');
        diamondsDesc.push(['ASSCHER','Vintage-style square shape with cropped corners']);
        diamonds[8].css('background-image', 'url(https://ion.r2net.com/images/amazingHomepage/diamonds/emerald-Diamond.png?v=3)');
        diamondsDesc.push(['EMERALD','Long lines create an elegant and sophisticated look']);
        diamonds[9].css('background-image', 'url(https://ion.r2net.com/images/amazingHomepage/diamonds/princess-Diamond.png?v=3)');
        diamondsDesc.push(['PRINCESS','Maximum brilliance in an exquisite square form']);
    }

    function insertData() {
        var clear = $('.clear');
        for(var i=0; i<5; i++) {
            clear.before(diamonds[i]);
        }

    }
});