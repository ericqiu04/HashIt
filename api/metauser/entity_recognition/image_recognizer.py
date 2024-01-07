from imageai.Classification import ImageClassification


class ImageRecognizer:

    def __init__(self) -> None:
        i = ImageClassification()
        i.setModelTypeAsMobileNetV2()

        # TODO deploy this model
        i.setModelPath('./pytorch-models/mobilenet_v2-b0353104.pth')
        i.loadModel()
        self.prediction = i

    def recognize_image(self, image_url):
        """TODO"""
