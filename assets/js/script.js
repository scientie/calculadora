$(function () {
    $('#metros-quadrados').val( $('#slider').val() );
    $(document).on('input', '#slider', function() {
        $('#metros-quadrados').val( $(this).val() );
    });

    $('.calcular').click(function(){
        if(!$('#qtdPosicoes').val() || !$('.tempo-imovel').val()){
            alert('Alguns campos estão vazios.');
        }else{
            var valorTotal = 0;

            valorTotal += $('#qtdPosicoes').val() * 300;
            valorTotal += $('#metros-quadrados').val() * 40;
            valorTotal += $('.tempo-imovel').val() * 40;

            var valorConcorrencia = 757;

            $('.total_value').html( 'R$ ' + valorTotal + ',00' );
            $('.economiza-value').html( 'R$ ' + valorConcorrencia + ',00' );
            
            $('.resultado').removeClass('hidden');
        }
        
    });
});