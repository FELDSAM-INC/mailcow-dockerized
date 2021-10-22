<?php

class Ispconfig {
	protected $client, $session_id, $config;

	public function __construct()
	{
		$configFile = $_SERVER['DOCUMENT_ROOT'] . '/inc/ispconfig.inc.php';
		
		if(!file_exists($configFile)) {
			throw new \Exception('Config file is missing. ISPConfig support is not available!');
		}
		
        require_once($configFile);
    	
		$this->config = $config;
	
		$this->client = new \SoapClient(null, array('location' => $this->config['soap_location'], 'uri' => $this->config['soap_uri']));
	}
	
	public function __call($method, $args)
	{
		//* Login to the remote server
		$this->session_id = $this->client->login($this->config['username'], $this->config['password']);
		
		if(substr($method, 0, 2) != '__')
		{
			array_unshift($args, $this->session_id);
		}
		
		if($return = call_user_func_array(array($this->client, $method), $args))
		{
			return $return;
		}
		
		return false;
	}
	
	public function get_config($key, $default = null)
	{
		if(array_key_exists($key, $this->config)) return $this->config[$key];
		
		return $default;
	}
}