<script>
    export let title;
</script>

<div class="section">
    <h2>
        <span>{title}</span>
    </h2>
    <slot></slot>
</div>

<style>
    h2 {
        width: 100%; 
        border-bottom: 2px solid #000; 
        text-align: center; 
        margin: 1em 0em; 
        line-height: 0.1em;
    } 

    h2 span {
        background: white;
        padding:0 1em; 
    }

    .section {
        padding: 1em 5em;
    }
</style>