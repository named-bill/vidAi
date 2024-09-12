import elevenlabs.client
from flask import Flask, request, jsonify, send_file
import requests
import elevenlabs
from elevenlabs import play, save, stream, Voice, VoiceSettings, client
from elevenlabs.client import ElevenLabs
from flask_cors import CORS
from dotenv import load_dotenv
import os
import openai
import json
import random
import time
import freesound
from moviepy.editor import *

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")
pexels_api_key = os.getenv("PEXELS_API_KEY")
pixabay_api_key = os.getenv("PIXABAY_API_KEY")
client = ElevenLabs(api_key=os.getenv("ELEVENLABS_API_KEY"))
# access the imagemagick environment variable dynamically
os.environ["IMAGE_MAGICK"] = os.environ.get("IMAGEMAGICK_BINARY")
  

print("Creating Flask app...")
app = Flask(__name__)
print("Enabling CORS...")

CORS(app)

@app.route('/api/video')
def getVideo():
    try:
        base_dir = os.path.dirname(os.path.abspath(__file__))
        video_path = os.path.join(base_dir, 'output.mp4')
        
        print("Checking for file at:", video_path)
        if not os.path.exists(video_path):
            print("File not found at path:", video_path)
            return "Video not found!", 404
        return send_file(video_path, as_attachment=False)
    except FileNotFoundError:
        print("FileNotFoundError caught")
        return "Video not found!", 404
    except Exception as e:
        print("An error occurred:", str(e))
        return "An error occurred", 500
@app.route('/api/voiceover', methods=['GET'])
def voiceover(text, voice_id, pitch, speed):
    max_attempts = 5
    attempts = 0
    success = False
    
    while not success and attempts < max_attempts:
        try:
            audio = client.generate(
                text=text,
                voice=Voice(
                    voice_id=voice_id,
                    settings=VoiceSettings(
                        speed=speed,
                        pitch=pitch,
                        volume=1.0,
                        stability=1.0,
                        similarity_boost=0.5,
                        use_speaker_boost=False
                    )
                )
            )
            
            save(audio, "output.mp3")
            success = True
        except Exception as e:
            attempts += 1
            print(f"Attempt {attempts} failed with error: {e}")
            if attempts == max_attempts:
                return f"Failed to generate voiceover after {max_attempts} attempts.", 500
    
    return "Voiceover generated successfully!"
@app.route('/api/getWord', methods=['GET', 'POST'])
def button_click():
    print("Received POST request...")
    data = request.get_json()
    accent = data.get('audioSettings')
    voice_gender = data.get('voiceType')
    video_voice_type = data.get('videoType')
    user_input = data.get('description')
    video_platform = data.get('videoSettings')
    video_length = data.get('videoLength')
    video_pace = data.get('pace')
    print(f"Received input: {user_input}")  # Debug statement
    success = False
    max_retries = 5
    retry_delay = 2
    print(accent)
    print(voice_gender)
    print(video_voice_type)
    print(video_platform)
    print(video_length)
    print(video_pace)
    for attempt in range(max_retries):
        try:
            # Generate voiceover script
            voiveover_script = openai.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a video script writer for 20 second social media videos. you creatively write voiceover script for a social media videos, your response should be only the words that will be spoken in the video and the syntax for adding pauses but not description of scene or music. Always show where the pauses should be in the voiceover and for how long as to fit the desired audio length. to add pauses to the voiceover script follow this example, example: Do you like sports <break time=\"1.0s\"/> well then guess what <break time=\"2.0s\"> here is what you want <break time=\"1.0s\"/> . so basically the pause syntax is <break time=\"number of seconds max of 3\"/>. remember to always use the pause tag syntax correctly to avoid errors, make sure it opens, closes and is well written according to the guidlines i have given. return a json object with the key 'voiceover' and the value as the voiceover script. I want you based on the pace: {video_pace} to suggest how many images you want to use in the video given that the video length is: {video_length}, since the video uses images as frames with transitions. in the json object, add a key 'images' with the value as the number of images you want to use in the video. add a key 'topic' with the value as the topic of the video. to make sure all images match the same feeling and vibe, add a key 'color' with the value as the color of the images you want to use, select from these options: red, orange, yellow, green, brown, black, white, gray. now add key 'voiceType' with a vale of the voice to be used in the voiceover, select from these options and us cases: for asmr, whispering cases like meditation use 'piTKgcLEGmPE4e6mEKli', for confident, new, female voice use 'Xb7hH8MSUJpSbSDYk0k2', for soothing, audio book, male narration use 'JBFqnCBsd6RMkjVDRZzb', for lively irish, sailor and video games use 'D38z5RcWu1voky8WS1ja', for american english accent male use either'pNInz6obpgDQGcFmaJgB' or '2EiwWnXFnvU5JabPnv8n', for mexican spanish use'z9fAnlkpzviPz146aGWa', for american strong documentary with canadian french accent use 'pqHfZKP75CvOlQylNhV4', for anxious, video game, young with italian accent use 'SOYHLrjzK2X1ezoPC6cr', and finally for australia accent use 'IKne3meq5aSn9XLyUdCD'. add a key 'pitch' for how high or low the pitch is in the voiceover, from 0.1 to 1.5 . add a key 'speed' for how fast or slow the voiceover is, from 0.1 to 1.5 . add a key 'caption' the value should be the best caption to use for the video generated."},
                    {"role": "user", "content": "prompt:" + user_input + " pace:" + video_pace + " video_length:" + video_length  + " video_platform:" + video_platform + "video_voice_type:" + video_voice_type + "accent:" + accent} 
                ]
            )
            success = True
            break
        except requests.exceptions.HTTPError as e:
            if response.status_code == 500:
                print("500 Massive ERROR. Hold on as KIIBZZ AI retries in {retry_delay} seconds...")
                time.sleep(retry_delay)
                retry_delay *= 2
            else:
                print("HTTP Error:", e)
                raise e
        except requests.exceptions.RequestException as e:
            print("Request Exception:", e)
            raise e
    
    # get the json object
    response = json.loads(voiveover_script.choices[0].message.content)
    # get the voiceover script
    voiceover_script = response['voiceover']
    # get caption
    captions = response['caption']
    # get the number of images
    number_of_images = response['images']
    # get the topic of the video
    topic = response['topic']
    # get the color of the images
    color = response['color']
    # get the voice type
    voice_type = response['voiceType']
    # get the pitch of the voiceover
    pitch = response['pitch']
    # get the speed of the voiceover
    speed = response['speed']
    # get tokens used
    prompt_tokens = voiveover_script.usage.prompt_tokens
    completion_tokens = voiveover_script.usage.completion_tokens
    total_tokens = prompt_tokens + completion_tokens
    print("Prompt tokens:", prompt_tokens)
    print("Completion tokens:", completion_tokens)
    print("Total tokens:", total_tokens)
    print("voiceover:" + voiceover_script)
    print("images:" + str(number_of_images))
    print("topic:" + topic)
    print("color:" + color)
    print("voiceType:" + voice_type)
    print("pitch:" + str(pitch))
    print("speed:" + str(speed))

    # generate search terms for images
    search_term = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a stock image researcher. You are a stock image researcher tasked with generating a set of stock images for a video based on a given prompt. The prompt will include the topic of the video and the voiceover script. Your goal is to provide search terms, durations, and descriptions in a structured format that will help create a smooth and coherent video. Return a JSON object containing the following key terms, each associated with an array. These arrays must be parallel, meaning that each index across all arrays should correspond to the same image. The key terms and their values are: 'search_term': an array of search terms used to find the images, creatively generated based on the video's topic and voiceover; 'time_length': an array where each element specifies the duration (in seconds, as a float) that each respective image should be displayed in the video, aligned with the voiceover script; 'music_search_term': an array of generic search terms for finding appropriate background music for the video they will all be tested to find the best match; 'captions': an array of the voiceover captions to be used on the image, should be the whole part of the voiceover that will be said during the duration of that image; 'image_prompt': an array of detailed descriptions for each image, comprehensive enough to guide image generation or selection, ensuring that the images match the video's topic and voiceover effectively. Avoid literal terms, do not use search terms that are direct quotes from the prompt, and ensure that the image_prompt provides enough detail for accurate image generation or selection. The time_length values should be accurate and in float format to match the duration needed for each image, taking into account the total number of images specified in the prompt."},
            {"role": "user", "content": "the topic of the video is:" + topic + " the voiceover is :" + voiceover_script + " the number of images is:" + str(number_of_images)}
        ], 
        temperature=1,
    )
    prompt_tokensS = search_term.usage.prompt_tokens
    completion_tokensS = search_term.usage.completion_tokens
    total_tokensS = prompt_tokens + completion_tokens
    print("Prompt tokens:", prompt_tokensS)
    print("Completion tokens:", completion_tokensS)
    print("Total tokens:", total_tokensS)
    search_term= json.loads(search_term.choices[0].message.content)
    search_terms = search_term.get('search_term', [])
    music_search_terms = search_term.get('music_search_term', [])
    image_prompt = search_term.get('image_prompt', [])
    image_time_length = search_term.get('time_length', [])
    captions = search_term.get('captions', [])
    
    
    
    #voiceover(voiceover_script, voice_type, pitch, speed)
    captionsf(captions)
    download_music(music_search_terms)
    #Pexels(search_terms, color, image_time_length, captions)
    #Pixabay(search_terms, color, image_time_length, captions)
    #generateImages(image_prompt, image_time_length, captions)
    #getVideo()
    
    return getVideo()
@app.route('/api/getCaption', methods=['GET', 'POST'])
def captionsf(captions):
    caption = captions
    return caption
@app.route('/api/pexels', methods=['GET'])
def Pexels(search_word, color, image_time_length, captions):
    # clear all images in the images folder
    files = os.listdir('./images')
    for file in files:
        os.remove(os.path.join('./images', file))

    image_urls = []
    images = []
    for term in search_word:
        url = f"https://api.pexels.com/v1/search?query={term}&orientation=portrait&color={color}&per_page=10"
        headers = {
            "Authorization": pexels_api_key
        }

        success = False
        max_retries = 5
        retry_delay = 2

        for attempt in range(max_retries):
            try:    
                response = requests.get(url, headers=headers)
                response.raise_for_status()

                data = response.json()

                if data['photos']:
                    selected_image = random.choice(data['photos'])
                    image_url = selected_image['src']['original']
                    image_urls.append(image_url)

                    # download the image
                    filename = image_url.split("/")[-1]
                    download_path = os.path.join('./images', filename)
                    os.makedirs('./images', exist_ok=True)
                    image_response = requests.get(image_url, stream=True)
                    image_response.raise_for_status()
                    with open(download_path, 'wb') as file:
                        for chunk in image_response.iter_content(chunk_size=8192):
                            file.write(chunk)
                    images.append(download_path.split("/")[-1])
                success = True
                break
            except requests.exceptions.HTTPError as e:
                if response.status_code == 504:
                    print("504 Massive ERROR. Hold on as KIIBZZ AI retries in {retry_delay} seconds...")
                    time.sleep(retry_delay)
                    retry_delay *= 2
                else:
                    print("HTTP Error:", e)
                    raise e
            except requests.exceptions.RequestException as e:
                print("Request Exception:", e)
                raise e

    print("image collected successfully number:" + str(len(image_urls)))
    print(image_urls)
    print(download_path)
    print(images)
    create_video(images, "output.mp3", "song.mp3", image_time_length, captions)
    return jsonify({'message': 'Images downloaded successfully!', 'image_urls': image_urls})

@app.route('/api/pixabay', methods=['GET'])
def Pixabay(search_word, color, image_time_length, captions):
    # clear all images in the images folder
    files = os.listdir('./images')
    for file in files:
        os.remove(os.path.join('./images', file))

    image_urls = []
    images = []
    for term in search_word:
        url = f"https://pixabay.com/api/?key={pixabay_api_key}&q={term}&image_type=photo&orientation=vertical&colors={color}&per_page=10"
        headers = {
            "Authorization": pixabay_api_key
        }
        print("url saved")
        success = False
        max_retries = 5
        retry_delay = 2

        for attempt in range(max_retries):
            try:    
                response = requests.get(url)
                response.raise_for_status()
                data = response.json()

                if data['hits']:
                    selected_image = random.choice(data['hits'])
                    image_url = selected_image['largeImageURL']
                    image_urls.append(image_url)
                    # download the image
                    filename = image_url.split("/")[-1]
                    download_path = os.path.join('./images', filename)
                    os.makedirs('./images', exist_ok=True)
                    image_response = requests.get(image_url, stream=True)
                    image_response.raise_for_status()
                    with open(download_path, 'wb') as file:
                        for chunk in image_response.iter_content(chunk_size=8192):
                            file.write(chunk)
                    images.append(download_path.split("/")[-1])
                success = True
                break
            except requests.exceptions.HTTPError as e:
                if response.status_code == 504:
                    print("504 Massive ERROR. Hold on as KIIBZZ AI retries in {retry_delay} seconds...")
                    time.sleep(retry_delay)
                    retry_delay *= 2
                else:
                    print("HTTP Error:", e)
                    raise e
            except requests.exceptions.RequestException as e:
                print("Request Exception:", e)
                raise e

    print("image collected successfully number:" + str(len(image_urls)))
    print(image_urls)
    print(download_path)
    print(images)
    print("image collected successfully")
    create_video(images, "output.mp3", "song.mp3", image_time_length, captions)
    return jsonify({'message': 'Images downloaded successfully!', 'image_urls': image_urls})

@app.route('/api/generateImages', methods=['POST'])
def generateImages(search_term, lengt, captions):
    # clear all images in the images folder
    files = os.listdir('./images')
    images = []
    x = 0
    
    for file in files:
        os.remove(os.path.join('./images', file))

    # download generated image from openai
    for term in search_term:
        success = False
        attempts = 0
        max_attempts = 5
        
        while not success and attempts < max_attempts:
            try:
                response = openai.images.generate(
                    model="dall-e-3",
                    prompt=term,
                    size="1024x1792",
                    quality="standard",
                    n=1,
                )
                image_url = response.data[0].url
                print(response.data[0].url)

                # download the image with .png extension
                filename = f"{str(x).replace(' ', '_')}.png"
                download_path = os.path.join('./images', filename)
                os.makedirs('./images', exist_ok=True)

                image_response = requests.get(image_url, stream=True)
                image_response.raise_for_status()

                with open(download_path, 'wb') as file:
                    for chunk in image_response.iter_content(chunk_size=8192):
                        file.write(chunk)

                x += 1
                images.append(download_path.split("/")[-1])
                success = True
            except (requests.exceptions.RequestException, openai.error.OpenAIError) as e:
                attempts += 1
                print(f"Attempt {attempts} failed with error: {e}")
                if attempts == max_attempts:
                    print("Max attempts reached. Moving to the next search term.")
                    break

    create_video(images, "output.mp3", "song.mp3", lengt, captions)
@app.route('/api/downloadMusic', methods=['GET'])
def download_music(terms=[]):
    terms.append("chill background music")
    api_key = os.getenv("FREESOUND_API_KEY")
    search_url = "https://freesound.org/apiv2/search/text/"
    DETAIL_URL = "https://freesound.org/apiv2/sounds/{}"
    success = False
    retry_delay = 2
    for term in terms:
        print(f"Searching for term: {term}")
        try:
            params = {
                "query": term,
                "token": api_key,
                "fields": "id"
            }
            response = requests.get(search_url, params=params)
            results = response.json()
            
            if not results['results']:
                print(f"No results found for term: {term}")
                continue
            first_result_id = results['results'][0]['id']

            detail_response = requests.get(DETAIL_URL.format(first_result_id), params={"token": api_key})
            detail_data = detail_response.json()

            download_url = detail_data['previews']['preview-hq-mp3']
            download_response = requests.get(download_url, stream=True)
            with open("song.mp3", "wb") as file:
                for chunk in download_response.iter_content(chunk_size=8192):
                    if chunk:
                        file.write(chunk)
            success = True
            break
        except requests.exceptions.HTTPError as e:
            if response.status_code == 500:
                print("500 $% Massive ERROR. Hold on as KIIBZZ AI retries in {retry_delay} seconds...")
                time.sleep(retry_delay)
                retry_delay *= 2
            else:
                print("HTTP Error:", e)
                raise e
        except requests.exceptions.RequestException as e:
            print("Request Exception:", e)
            raise
    print("Music downloaded successfully!")
    return "Music downloaded successfully!"        

def create_video(images, audio, music, length, captions):
    clips = []
    for image , leng, caption in zip(images, length, captions):
        # Load the image
        image_clip = ImageClip(image).set_duration(leng)
        # Add big nice looking captions at the bottom center, with a cool bubbly font in white with black outline, with a pooping effect
        caption_clip = TextClip(caption, fontsize=70, color='white', bg_color='black', font='Comic-Sans-MS', stroke_color='black', stroke_width=2).set_duration(leng).set_position(('center', 'bottom')).set_start(0).set_end(leng)
        # Combine the image and caption clips
        final_clip = CompositeVideoClip([image_clip, caption_clip])
        clips.append(final_clip)
        

    # Add crossfadein transition between images
    for i in range(len(clips) - 1):
        clips[i] = clips[i].crossfadein(1)

    # Concatenate the clips
    final_clip = concatenate_videoclips(clips, method="compose")

    # Set the audio
    audio_clip = AudioFileClip(audio)
    audio_duration = audio_clip.duration

    # Adjust the video duration to match the audio duration
    final_clip = final_clip.set_duration(audio_duration)

    # Load the background music
    music_clip = AudioFileClip(music).volumex(0.25).set_duration(audio_duration)

    # Combine the audio clips
    composite_audio = CompositeAudioClip([audio_clip, music_clip])

    # Set the composite audio to the video
    final_clip = final_clip.set_audio(composite_audio)

    print("Audio set to video successfully")
    # Save the video
    video_path = "backend/output.mp4"
    final_clip.write_videofile(video_path, codec="libx264", fps=24, audio_codec="aac")
    print("Video created successfully!")
    return jsonify({"message": "Video created successfully!"})
    
if __name__ == '__main__':
    print("Starting Flask app...")
    app.run(debug=True, port=5001)
    print("Flask app is running!")
