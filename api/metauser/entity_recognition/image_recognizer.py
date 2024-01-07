from imageai.Classification import ImageClassification
from typing import List

class ImageRecognizer:

    def __init__(self) -> None:
        i = ImageClassification()
        i.setModelTypeAsMobileNetV2()

        # TODO deploy this model
        i.setModelPath('.././static/mobilenet_v2-b0353104.pth')
        i.loadModel()
        self.prediction = i

    def generate_hashtags(self, image_url) -> List:
        """TODO"""
        predictions, probabilities = self.prediction.classifyImage(
            str(image_url), result_count=10)

        hashtags = [{"hashtag": each_prediction, "priority": each_probability}
                    for each_prediction, each_probability in zip(predictions, probabilities)]

        return hashtags
    