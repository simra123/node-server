echo '
<button id=' . esc_attr( $product->get_id() ) . " 
class='request-a-quote-button button' 
onclick='add_to_quote_product_shop_page_simple_external_products(" . esc_attr( $product->get_id() ) . ");' 
style=" . esc_attr( $this->request_a_quote_button_color ) . '>' . esc_html( $this->request_a_quote_button_text, 'ELEX_RAQ_PLUGIN_DOMAIN' ) ."
<a class='add_to_quote_clicked_message_link' style='display:none;' href=" . esc_attr( $this->request_a_quote_page_redirect_url ) . '/>' . esc_html('View the quote list', 'ELEX_RAQ_PLUGIN_DOMAIN') ."
 </a>
</button>
;
			}