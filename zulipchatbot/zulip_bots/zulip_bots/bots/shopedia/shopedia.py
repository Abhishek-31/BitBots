import requests
import re
from typing import Dict, Any, Tuple, Union

class SusiHandler(object):
    '''
    Shopedia
    To create and know more of SUSI skills go to ``

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
        words = msg.split(' ')
        query = words[len(words) - 1] 
        query = query[:-1]   
        reply = requests.post("https://shopedia.herokuapp.com/consumer/search", data={'itemName': query, 'latitude': '31', 'longitude': '76'})
        try:
            answer = reply.json()[0]['shopName'] + ' is nearby!'
            # answer = reply.json()[0]['shopName']+ 'will find you a ' + query + '. It\'s just ' +reply.json()[0]['distance'] + 'kilometers away!'
            # print(answer)
        # except Exception:
        except:
            answer = "I don't understand. Can you rephrase?"
        bot_handler.send_reply(message, answer)

handler_class = SusiHandler
