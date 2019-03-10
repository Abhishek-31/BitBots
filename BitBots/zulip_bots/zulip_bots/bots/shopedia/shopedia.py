import requests
from typing import Dict, Any, Tuple, Union

class SusiHandler(object):
    '''
    Susi AI Bot
    To create and know more of SUSI skills go to `https://skills.susi.ai/`
    '''

    def usage(self) -> str:
        return '''
    Hi, I am Shopedia, you can ask me:
    ```
    Where can I buy a laptop?
    ```
        '''

    def handle_message(self, message: Dict[str, str], bot_handler: Any) -> None:
        msg = message['content']
        if msg == 'help' or msg == '':
            bot_handler.send_reply(message, self.usage())
            return
        reply = requests.get("https://api.susi.ai/susi/chat.json", params=dict(q=msg))
        try:
            answer = reply.json()['answers'][0]['actions'][0]['expression']
        except Exception:
            answer = "I don't understand. Can you rephrase?"
        bot_handler.send_reply(message, answer)

handler_class = SusiHandler
